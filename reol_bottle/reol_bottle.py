from bottle import request, response, route, get, post, template, redirect, error, run
from login_file import get_token, del_token, val_token


@route('/')
def home():
    if val_token(request.get_cookie('log_token')):
        return template('templates/home')
    redirect("/login")


@route('/toplay.html')
def toplay():
    if val_token(request.get_cookie('log_token')):
        return template('templates/gamelist')
    redirect("/login")


@get('/login')
def login_page():
    if not val_token(request.get_cookie('log_token')):
        return template('templates/login')
    redirect('/')

@post('/login')
def login():
    u = request.forms.get('user')
    p = request.forms.get('pass')
    response.set_cookie('log_token', get_token(u, p),
                       max_age=3600, httponly=True)#, secure=True)
    redirect('/')


@route('/logout')
def logout():
    del_token(request.get_cookie('log_token'))
    response.set_cookie('log_token', '')
    redirect('/login')


@error(404)
def notfound():
    return "There's nothing here."

#run(debug =True)
