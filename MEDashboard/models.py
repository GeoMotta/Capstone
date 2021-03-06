from MEDashboard import app, db
from datetime import datetime

from sqlalchemy import Table, Column, Integer, String, MetaData,ForeignKey



class Project(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.Text, nullable=False)
    start_date = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    
    #start_date = Column(db.DateTime, default = datetime.utcnow) 
    #description = db.Column(db.String(300))

    def __repr__(self):
        return "<Project '{}': '{}'>".format(self.name, self.description)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username