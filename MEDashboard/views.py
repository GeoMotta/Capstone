from flask import render_template, url_for, request, redirect, flash
from datetime import datetime
from MEDashboard import app
from MEDashboard.forms import new_project



@app.route("/login") 
def login(): 
    return render_template('login.html')

#---------------------------------[ Home Page ]-------------------------------------

@app.route('/')
@app.route("/home") 
def home(): 
    return render_template('home.html', recent_projects = recent_project())

def recent_project():
    #Returns lastest created projects
    recent_projects = [{'name': 'Mkapa Fellows', 'url': 'Mkapa'}, {'name': 'TB/HIV', 'url': 'TB'}, {'name': 'Self Testing', 'url': 'Self'}] 
    return recent_projects


@app.route("/dashboard") 
def dashboard(): 
    return render_template('dashboard.html', project_name='Mkapa Fellows')



@app.route("/project") 
def project(): 
    return render_template('project.html', project_name= 'Mkapa Fellows')


@app.route("/users") 
def users(): 
    return render_template('users.html')


@app.route("/notifications") 
def notification(): 
    return render_template('notification.html')


@app.route("/calendar") 
def calendar(): 
    return render_template('calendar.html')


@app.route("/help") 
def help(): 
    return render_template('help.html')


@app.route("/Settings") 
def settings(): 
    return render_template('settings.html')


#----------------------------------------------------------------------

@app.route("/new_project", methods=['GET', 'POST']) 
def NewProject(): 
    # Generate a form for new project

    form = new_project()
    if form.validate_on_submit():
        project_name = form.project_name.data
        print(project_name)
        flash('Project name entered {}'.format(project_name))
        return redirect(url_for('home'))
    return render_template('new_project.html', form = form)









