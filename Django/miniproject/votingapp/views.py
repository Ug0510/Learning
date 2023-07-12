from django.shortcuts import render
from django.http import HttpResponse

arr = ['Java', 'Cplusplus', 'Python', 'Chash', 'DotNet', 'PHP', 'SQL', 'Ruby', 'R']
globalcnt = dict()

# Create your views here.
def index(request):
    mydictionary = {
        'arr': arr
    }
    return render(request, 'index.html', context=mydictionary)

def getquery(request):
    q = request.GET['languages']
    if q in globalcnt:
        # if already exists then increment the frequency
        globalcnt[q] += 1
    else:
        # first occurrence
        globalcnt[q] = 1
    
    # sorting the dictionary in ascending order based on their counts
    sorted_dict = {k: v for k, v in sorted(globalcnt.items(), key=lambda item: item[1])}

    mydictionary = {
        'arr': arr,
        'globalcnt': sorted_dict
    }
    return render(request, 'index.html', context=mydictionary)
