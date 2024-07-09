from flask import request, redirect, url_for, render_template, Flask
from werkzeug.exceptions import BadRequest, NotFound
from flask_cors import CORS
from . import utils
from flask import current_app as app
from . import cache
from apscheduler.schedulers.background import BackgroundScheduler
import logging
import datetime

__search_cache__ = cache.SimpleCache(6)
__mockup_cache__ = cache.SimpleCache(20)
__recommend_cache__ = cache.SimpleCache(6)
__remove_bg_cache__ = cache.SimpleCache(20)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/top50books')
def top50books():
    return render_template('top50.html')

@app.route('/top50')
def top50():
    return utils.top_50()

# Configure logging
logging.basicConfig(level=logging.INFO)

def reload_website():
    logging.info(f"Reloaded at {datetime.now().isoformat()}")

# Initialize the scheduler
scheduler = BackgroundScheduler()
scheduler.add_job(func=reload_website, trigger="interval", seconds=14*60)

@app.before_first_request
def init_scheduler():
    scheduler.start()


@app.route('/book')
def book():
    book_name = request.args.get('book', default=None, type=str)
    if book_name is None:
        return "Book name not provided", 400
    return render_template('home.html', book=book_name)


@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q', default=None, type=str)
    cached = __search_cache__.get(query)
    if cached:
        return cached

    result = utils.search(query)
    __search_cache__.put(query, result)
    return result


@app.route('/mockup', methods=['POST'])
def mockup():
    data = request.json
    file_name = data["file_name"]
    options = data["options"]
    cached = __mockup_cache__.get(file_name)
    if cached:
        return cached

    processed_file_path = utils.mockup(file_name, options)
    if(processed_file_path == None):
        return {'error': 'Error in processing the image'}, 204
    if(processed_file_path.startswith('http')):
        return {'file_path' : processed_file_path}
    
    response = {'file_path' : '../' + processed_file_path}
    __mockup_cache__.put(file_name, response)
    return response


@app.route('/suggestions', methods=['POST'])
def suggestion():
    data = request.json
    name = data["name"]
    cached = __recommend_cache__.get(name)
    if cached:
        return cached
    try:
        result = utils.recommend(name, 5)
    
    except BadRequest as e:
        return {'error': str(e)}, 204 
    __recommend_cache__.put(name, result)
    return result


@app.route('/remove_bg')
def remove_bg():
    file_path = request.args.get('file_path')
    file_name = request.args.get('file_name')
    cached = __remove_bg_cache__.get(file_name)
    if cached:
        print('cache')
        return cached
    print('not cached')
    processed_file_path = utils.removeBg(file_path, file_name)
    if(processed_file_path == None):
        return {'error': 'Error in processing the image'}, 204
    if(processed_file_path.startswith('http')):
        return {'file_path' : processed_file_path}
    
    response = {'file_path' : '../' + processed_file_path}
    __remove_bg_cache__.put(file_name, response)
    return response