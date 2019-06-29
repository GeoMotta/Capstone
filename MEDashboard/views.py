from flask import render_template, url_for, request, redirect, flash
from datetime import datetime
from MEDashboard import app, db
from MEDashboard.forms import new_project
from MEDashboard.models import Project, User




@app.route('/')
def blank():
    return render_template('home.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/login')
def logIn():
    return render_template('login.html')

@app.route('/add_project')
def addProject():
    return render_template('new_project.html')


@app.route('/user_home')
def userHome():
    return render_template('user_home.html')

@app.route('/new_user', methods=['POST', 'GET'])
def addUser():
    if request.method == 'POST':
        username = request.form['username']
        flash('Hallow world')
        return redirect(url_for('userHome'))
    return render_template('create_user.html')