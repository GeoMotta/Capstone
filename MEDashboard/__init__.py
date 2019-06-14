"""
The flask application package.
"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

import os
basedir = os.path.abspath(os.path.dirname(__file__))


app = Flask(__name__)
app.config['SECRET_KEY'] = '\xa1=\xa6\x1b\x80\xfdrA5\xd3a\x0f9a(\xba\xc1\xbd\xecD5\x13\x85\x1c'



# Database config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'capstone.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

import MEDashboard.models
import MEDashboard.views