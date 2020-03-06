from django.shortcuts import render, redirect
from django.http import Http404
from .models import *


def home(request):
    return render(request, 'comic_like/home.html')


def not_implemented(request):
    return render(request, 'comic_like/notyet.html')


def index(request):
    context = {'comics': Comic.objects.all()}
    return render(request, 'comic_like/index.html', context)


def comic(request, comic_id):
    # if theres no comic
    try:
        comic = Comic.objects.get(pk=comic_id)
    except:
        # 404
        raise Http404('Not found')
    # else
    context = {
        'comic': comic,
        'paginas': comic.paginas.all()
    }
    return render(request, 'comic_like/comic.html', context)


def pagina(request, comic_id, comic_page):
    # if theres no comic
    try:
        comic = Comic.objects.get(pk=comic_id)
    except:
        # 404
        raise Http404('Not found')
    # if theres no page
    try:
        page = comic.paginas.get(numero=comic_page)
    except:
        # comic pages
        return redirect('comic', comic_id=comic_id)
    # else give the page
    context = {'pagina': page}
    return render(request, 'comic_like/pagina.html', context)