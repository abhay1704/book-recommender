from flask import request
from flask import redirect, url_for
from flask import render_template
from flask import Flask, render_template, request
from werkzeug.exceptions import BadRequest, NotFound
from flask_cors import CORS
from flask import send_file
from . import utils
from flask import current_app as app



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/top50books')
def top50books():
    return render_template('top50.html')


@app.route('/book')
def book():
    book_name = request.args.get('book', default=None, type=str)
    if book_name is None:
        # Handle the case where 'book' query parameter is not provided
        return "Book name not provided", 400
    return render_template('home.html', book=book_name)

@app.route('/top50')
def top50():
    return utils.top_50()


@app.route('/suggestions', methods=['POST'])
def suggestion():
    data = request.json
    name = data["name"]

    try:
        result = utils.recommend(name, 5)
    
    except BadRequest as e:
        return {'error': str(e)}, 204 
    
    return result


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response

@app.route('/all_books')
def all_books():
    return utils.list_books()


@app.route('/remove_bg')
def remove_bg():
    file_path = request.args.get('file_path')
    file_name = request.args.get('file_name')
    processed_file_path = utils.removeBg(file_path, file_name)
    return send_file('../'+processed_file_path, mimetype='image/png')


