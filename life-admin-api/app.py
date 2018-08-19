from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config.from_mapping(
    SECRET_KEY='dev',
    DATABASE=os.path.join(app.instance_path, 'api.postgresql'),
    SQLALCHEMY_DATABASE_URI=os.environ['DATABASE_URL'],
    SQLALCHEMY_BINDS={},
    DB_USER='philBarber',
    DB_PASS=''
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

import models

@app.route('/')
def hello():
    return "Hello World"


@app.route('/task=<title>')
def hello_name(title):
    result = models.Result(title=title)
    db.session.add(result)
    db.session.commit()
    return "Hello {}!".format(title)


if __name__ == '__main__':
    app.run()
