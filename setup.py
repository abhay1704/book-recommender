from setuptools import setup

setup(
    name='book-recommender',
    version='1.0',
    install_requires=[
        'numpy==1.22.4',
        'werkzeug==2.2.3',
        'flask==2.2.3',
        'json5==0.9.5',
        'gunicorn==21.2.0',
        'pandas==1.5.3',
        'flask-cors',
        'requests',
        'fuzzywuzzy',
        'backgroundremover',
        'apscheduler',
        'python-dotenv',
        'setuptools==65.5.0',
        'wheel==0.37.1'
    ],
)
