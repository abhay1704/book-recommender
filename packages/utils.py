import json
import numpy as np
import pickle
from werkzeug.exceptions import BadRequest, NotFound
import requests
import os


BGREMOVER_APIKEY = os.environ.get('BGREMOVER_APIKEY')


with open('all_books.json', 'r') as f:
    all_books = json.load(f)
    f.close()


def top_50():
    with open("mostpopular.json", 'r') as f:
        top_50_books = json.load(f)
        f.close()
    return top_50_books


def recommend(book_name, k):
    book_index = pickle.load(open("book_index.pkl", "rb"))
    book_name = book_name.replace("%20", " ")
    # print(book_name, book_index)
    try:
        index = np.where(book_index == book_name)[0][0]
    except:
        raise BadRequest('Book name is missing in the request.')

    similarity_score = pickle.load(open("similarity_score.pkl", "rb"))

    similar_books = list(enumerate(similarity_score[index]))
    similar_books = sorted(similar_books, reverse=True, key=lambda x: x[1])
    top_k_similar = similar_books[1:k+1]

    suggestion = {}
    for idx, prob in top_k_similar:
        book_name = book_index[idx]
        suggestion[book_name] = all_books[book_name]
    return suggestion


def list_books():
    return json.dumps(list(all_books.keys()))

def removeBg(file_path, file_name):
    # Download and Save file from link to server
    req = requests.get(file_path)
    file_path = "dist/temp.png"
    with open(file_path, 'wb') as f:
        f.write(req.content)
        f.close()

    # use saved file to make request to remove.bg

    response = requests.post(
        'https://api.remove.bg/v1.0/removebg',
        files={'image_file': open(file_path, 'rb')},
        data={'size': 'auto'},
        headers={'X-Api-Key': BGREMOVER_APIKEY},
    )

    final_path = 'dist/' + file_name + '.png'
    if response.status_code == requests.codes.ok:
        with open(final_path, 'wb') as out:
            out.write(response.content)
            out.close()
        return final_path

