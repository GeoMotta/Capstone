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