from django.urls import path
from . import views
urlpatterns = [
    path('',views.SongListView.as_view()),
    path('test/',views.autoSong.as_view()),
]
