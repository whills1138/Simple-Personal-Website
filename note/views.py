from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Note

def note_list(request):
    Notes = Note.objects.all()
    create_time = timezone.now()
    Notes_recent = Note.objects.filter(pub_date__day__range=(create_time.day-30, create_time.day))
    return render(request, "articles_archive.html", {"Notes": Notes, "Notes_recent": Notes_recent})


def note_detail(request, Note_id):
    # Note = Note.objects.get(id=note_id)
    note_c = get_object_or_404(Note, id=Note_id)
    Pub_Date = Note.pub_date
    return render(request, "articles_view.html", {"Note": note_c, "Publish Date": Pub_Date})
