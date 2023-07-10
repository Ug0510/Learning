from django.shortcuts import render
from django.http import HttpResponse



arr = ['Java','Cplusplus','Python','Chash','DotNet','PHP','SQL','Ruby','R']
globalcnt = dict()

# Create your views here.
def index(request):
    mydictionary = {
        'arr':arr
    }
    return render(request,'index.html',context=mydictionary)

def getquery(request):
    q = request.GET['languages']
    if q in globalcnt:
        #if already exists then increment the frequency
        globalcnt[q] += 1
    else:
        #first occurence
        globalcnt[q] = 1
    mydictionay = {
        'arr':arr,
        "gbcnt":globalcnt
    }
    return render(request,'index.html',context=mydictionay)