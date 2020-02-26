from django.urls import path
from . import views

urlpatterns = [
    # comic/1/1
    path('<int:comic_id>/<int:comic_page>', views.pagina, name='pagina')
]