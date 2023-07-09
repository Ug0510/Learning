from django.urls import path
from . import views

#All urls

urlpatterns = [
    path('',views.index,name='index ')
]
