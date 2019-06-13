"""
The flask application package.
"""

from flask import Flask
app = Flask(__name__)
app.config['SECRET_KEY'] = '\xa1=\xa6\x1b\x80\xfdrA5\xd3a\x0f9a(\xba\xc1\xbd\xecD5\x13\x85\x1c'

import MEDashboard.views
