from flask_wtf import Form
from wtforms.fields import StringField
from wtforms.validators import DataRequired

class new_project(Form):
    project_name = StringField('project_name', validators=[DataRequired()])