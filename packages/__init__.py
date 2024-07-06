from flask import Flask

def create_app():
    app = Flask(__name__, static_folder='../dist', template_folder='../dist')

    with app.app_context():
        from . import routes

    return app

