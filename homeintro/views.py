from django.shortcuts import render
from django.template.loader import get_template

# Create your views here.

def opensite(request):
    return render(request, "index.html")

def openarticles(request):
    return render(request, "Articles_archive.html")

def openworks(request):
    return render(request, "fl_works.html")

def openextra(request):
    return render(request, "fl_extra.html")

def opencontact(request):
    return render(request, "contact.html")

def recent(request):
    return render(request, "fl_recent.html")

def openhome(request):
    return render(request, "home/index.html")

def opendownload(request):
    return render(request, "download/index.html")