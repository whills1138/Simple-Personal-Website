from django.urls import path, re_path, include
from . import views
from note import views as noteview

app_name = 'home'

urlpatterns = [
    path('', views.opensite),
    path('about', views.opensite),
    path('articles', noteview.note_list),
    path('articles_<int:Note_id>', noteview.note_detail),
    path('works', views.openworks),
    path('extra', views.openextra),
    path('contact', views.opencontact),
    path('recent', views.recent, name='recent'),
    path('home', views.openhome),
    path('download', views.opendownload),
    path('search', include('haystack.urls')),
]