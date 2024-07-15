import json
import numpy as np
import pickle
from werkzeug.exceptions import BadRequest, NotFound
import requests
from backgroundremover.bg import remove
import os
from dotenv import load_dotenv
from fuzzywuzzy import process
import cv2

load_dotenv()
API_KEY_GOOGLE = os.getenv("API_KEY_GOOGLE")
API_URL_GOOGLE = os.getenv("API_URL_GOOGLE")
API_KEY_MOCKUP = os.getenv("API_KEY_MOCKUP")
MOCKUP_URL = os.getenv("MOCKUP_URL")

__book_index__ = pickle.load(open("book_index.pkl", "rb"))

# Removed unnecessary file close after 'with' statement
with open('all_books.json', 'r') as f:
    all_books = json.load(f)

def findMatch(book_index, book_name):
    matches = process.extract(book_name, book_index, limit=None)
    filtered_matches = [match for match in matches if 90 <= match[1] <= 100]

    if filtered_matches:
        highest_match = max(filtered_matches, key=lambda x: x[1])
        highest_match_name = highest_match[0]

        # Corrected the way to find the index using list comprehension
        index = [i for i, name in enumerate(book_index) if name == highest_match_name][0]
        return index
    else:
        return -1

def top_50():
    with open("mostpopular.json", 'r') as f:
        top_50_books = json.load(f)
    return top_50_books

def recommend(book_name, k):
    book_name = book_name.replace("%20", " ")
    
    index = findMatch(__book_index__, book_name)

    # Corrected the way exceptions are raised
    if index == -1:
        raise NotFound("Book not found")
    
    similarity_score = pickle.load(open("similarity_score.pkl", "rb"))

    similar_books = list(enumerate(similarity_score[index]))
    similar_books = sorted(similar_books, reverse=True, key=lambda x: x[1])
    top_k_similar = similar_books[1:k+1]

    suggestion = {}
    for idx, prob in top_k_similar:
        book_name = __book_index__[idx]
        suggestion[book_name] = all_books[book_name]
    return suggestion

def list_books():
    return json.dumps(list(all_books.keys()))

def _remove_bg(image_path, output_path):
    url = "https://abhay1704-bgremove.hf.space/remove-background/"
    files = {'file': open(image_path, 'rb')}

    response = requests.post(url, files=files)

    if response.status_code == 200:
        with open(output_path, "wb") as f:
            f.write(response.content)
        return output_path
    else:
        return None        

def removeBg(file_path, file_name):
    res = requests.get(file_path)
    with open('src.png', 'wb') as f:
        f.write(res.content)

    file = _remove_bg('src.png', f'dist/{file_name}.png' )
    return file

def search(query):
    URL = f"{API_URL_GOOGLE}?q={query}&key={API_KEY_GOOGLE}"
    response = requests.get(URL)
    if response.status_code != 200:
        return "Error: API request unsuccessful"
    data = response.json()
    return data

def mockup(file_name, options):
    if isinstance(options, str):
        options = json.loads(options)
    
    url = "https://api.mediamodifier.com/v2/mockup/render"
    headers = options['headers']
    headers['api_key'] = API_KEY_MOCKUP
    
    payload = options['body']
    if isinstance(payload, str):
        payload = json.loads(payload)
    
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code != 200:
        # Corrected the way exceptions are raised
        raise BadRequest("Error: API request unsuccessful")
    data = response.json()
    if not data['success']:
        # Corrected the way exceptions are raised
        raise NotFound(data['message'])
    
    image = data['url']
    image = removeBg(image, file_name)
    if not image:
        return data['url']
    return image
