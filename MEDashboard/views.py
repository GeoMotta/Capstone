from flask import render_template, url_for
from datetime import datetime
from MEDashboard import app



@app.route("/login") 
def login(): 
    return render_template('login.html')

@app.route('/')
@app.route("/home") 
def home(): 
    return render_template('home.html')


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

@app.route("/new_project") 
def new_project(): 
    return render_template('new_project.html')









