from flask import Flask, render_template, request
import utils
from werkzeug.exceptions import BadRequest, NotFound


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/top50')
def top50():
    return utils.top_50()


@app.route('/suggestions', methods=['POST'])
def suggestion():
    data = request.json;
    name = data["name"]
    print(name)
    try:
        result = utils.recommend(name, 5);
    
    except BadRequest as e:
        return {'error': str(e)}, 400 
    
    return result

@app.route('/all_books')
def all_books():
    return utils.list_books()


if __name__ == "__main__":
    app.run(debug=True)
