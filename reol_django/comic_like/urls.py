from django.urls import path
from . import views

urlpatterns = [
    # index/
    path('index/', views.index, name='c_index'),
    # show/1
    path('show/<int:comic_id>', views.comic, name='comic'),
    # show/1/1
    path('show/<int:comic_id>/<int:comic_page>', views.pagina, name='pagina'),
    path('', views.home, name='home'),
    path('notyet', views.not_implemented, name='not_implemented')
]