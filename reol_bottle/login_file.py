USERS = [('Intelectualoides', 'NONESHALLPASS')]

def val_token(token):
    return token == '413|612'

def get_token(user, pasw):
    print("got:", user, pasw)
    for u, p in USERS:
        print("comparing", u, p)
        if u == user and p == pasw:
            return '413|612'
    return ''

def del_token(token):
    pass