from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    arr = ['Java','Cplusplus','Python','Chash','DotNet','PHP','SQL','Ruby','R']
    mydictionary = {
        'arr':arr
    }
    return render(request,'index.html',context=mydictionary)