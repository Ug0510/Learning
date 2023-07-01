from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .forms import *



# Create your views here.

def error_404_view(request,exception):
    return render(request,'404.html')

def myfunctioncall(request):
    return HttpResponse("Hello World")

def aboutpage(request):
    return HttpResponse("This is the about page")
    
def addpage(request,a,b):
    return HttpResponse(a+b)

def intro(request,name,age):
    mydictionary = {
        "name" : name,
        "age" : age,
    }
    return JsonResponse(mydictionary)

def firstpage(request):
    return render(request,'index.html')

def secondpage(request):
    return render(request,'two.html')

def thirdpage(request):
    myfruits = ['appla','banana','orange','guava']
    mydictionary = {
        "myfruits":myfruits,
    }
    return render(request,'trio.html',context = mydictionary)

def imagepage(request,name):
    if name == 'img1':
        var='0'
    elif name == 'img2':
        var = '1'
    elif name == 'img3':
        var = '2'
    mydictionay = {
        "var" : var,
    }
    print(mydictionay)
    return render(request,'image.html', context=mydictionay)

def myforms(request):
    return render(request,'myform.html')

def myforms2(request):
    if request.method == "POST":
         form = FeedbackForm(request.POST)
         if form.is_valid():
            title = request.POST['title']
            subject = request.POST['subject']
            mydictionary = {
                 'form': FeedbackForm(),
            }
            errorflag = False
            Errors = []
            if title != title.upper():
                errorflag = True 
                errormsg = 'Title should be in Capital Letters'
                Errors.append(errormsg)
            if subject != subject.upper():
                errorflag = True
                errormsg = 'Subject should be in Capital Letters'
                Errors.append(errormsg)
            if errorflag != True:
                mydictionary['success'] = True
                mydictionary['successmsg'] = 'You did a great job buddy'
            
            mydictionary['error'] = errorflag
            mydictionary['errormsg'] = Errors
            return render(request,'myform2.html',context=mydictionary)
         
    elif request.method == "GET":
        form = FeedbackForm() #FeedbackForm(None)
        mydictionary = {
            "form": form,
        }
        return render(request,'myform2.html',context=mydictionary)