from flask import render_template, url_for, request, redirect, flash, jsonify
from datetime import datetime
from MEDashboard import app, db
from MEDashboard.forms import new_project
from MEDashboard.models import Project, User


@app.route('/', methods=['POST', 'GET'])
def logIn():
    if request.method == 'POST':
        user_name = request.form['username']
        passwd = request.form['passwd']
        if user_name == 'admin' and passwd == 'admin':
            return redirect(url_for('home'))
    return render_template('login.html')


@app.route('/home')
def home():
    return render_template('home.html')









'''
@app.route('/')
def blank():
    flash('testing flash message')
    return render_template('home.html')
'''





@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')




@app.route('/add_project', methods=['POST', 'GET'])
def addProject():
    if request.method == 'POST':
    
        print(request.form['project_title'])

        #data = request.get_json()
        #print(data)
    return render_template('new_projectx.html')






@app.route('/user_home')
def userHome():
    return render_template('user_home.html')




@app.route('/new_user', methods=['POST', 'GET'])
def addUser():
    if request.method == 'POST':

        username = request.form['username']

        flash(username)
        return redirect(url_for('userHome'))
    return render_template('create_user.html')