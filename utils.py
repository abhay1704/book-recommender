import json
import numpy as np
import pickle
from werkzeug.exceptions import BadRequest, NotFound


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

