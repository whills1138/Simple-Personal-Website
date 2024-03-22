from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField


class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pub_date = models.DateTimeField()
    title = models.CharField(max_length=200)
    # body = models.TextField()
    body = RichTextField()

    class Meta:
        ordering = ("-pub_date",)  # publish的倒序排序。此处是元祖，不要忘写后面的逗号

    def __str__(self):
        return self.title
