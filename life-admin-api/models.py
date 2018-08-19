from app import db
from sqlalchemy.dialects.postgresql import JSON


class Result(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    recurrenceN = db.Column(db.Integer)
    recurrenceMode = db.Column(db.String)
    lastCompleted = db.Column(db.DateTime)

    def __init__(self, title):
        self.title = title

    def __repr__(self):
        return '<id {}>'.format(self.id)
