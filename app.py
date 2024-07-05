from flask import Flask, render_template, request
import utils
from werkzeug.exceptions import BadRequest, NotFound
from flask_cors import CORS
from flask import send_file

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/')
def index():
    return render_template('index.html')


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
    file_path = utils.removeBg(file_path)
    return send_file(file_path, mimetype='image/png')


if __name__ == "__main__":
    app.run(debug=True)
