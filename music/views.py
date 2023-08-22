from django.shortcuts import render,HttpResponse
from django.views.generic import ListView,DetailView,DeleteView,CreateView,View
from .models import Music
# Create your views here.

class SongListView(ListView):
    model=Music
    context_object_name="tracks"
    template_name="music/index.html"


class autoSong(ListView):
    model=Music
    context_object_name="songs"
    template_name="music/autoSong.html"