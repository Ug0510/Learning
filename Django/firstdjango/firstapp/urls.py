from django.urls import path
from . import views

urlpatterns = [
    path('',views.myfunctioncall,name="index"),
    path('about',views.aboutpage,name="about"),
    path('add/<int:a>/<int:b>',views.addpage,name="addition"),
    path('intro/<str:name>/<int:age>',views.intro,name="intro"),
    path('firstpage',views.firstpage,name="firstpage"),
    path('secondpage',views.secondpage,name="secondpage"),
    path('thirdpage',views.thirdpage,name="thirdpage"),
    path('imagepage/<str:name>',views.imagepage,name='imagepage'),
    path('myforms',views.myforms,name="myforms"),
    path('myforms2',views.myforms2,name='myform2'),
    ]
