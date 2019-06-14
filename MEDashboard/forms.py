from flask_wtf import Form
from wtforms.fields import StringField
from wtforms.validators import DataRequired

class new_project(Form):
    project_name = StringField('project_name', validators=[DataRequired()])
    Project_description = StringField('project_desc', validators=[DataRequired()])
    start_date = StringField('Start Date', validators=[DataRequired()])
    end_date = StringField('end Date',  validators=[DataRequired()])

    # format='%m/%d/%Y'
