from django.shortcuts import render
from .models import *


def pagina(request, comic_id, comic_page):
    try:
        comic = Comic.objects.get(pk=comic_id)
        page = comic.paginas.get(numero=comic_page)
    except:
        return render(request, 'comic_like/404.html')
    context = {'pagina': page}
    return render(request, 'comic_like/pagina.html', context)