from django.urls import path
from . import views 

#all urls are here 
urlpatterns = [
    path('',views.root,name='root'),
]
