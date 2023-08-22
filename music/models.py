from __future__ import unicode_literals
from django.db import models
# Create your models here.


class Music(models.Model):
    title=models.CharField(max_length=60,null=False,blank=False)
    artist=models.CharField(max_length=120,null=False,blank=False)
    audio_file=models.FileField(upload_to='musics/',null=False,blank=False)
    album=models.ForeignKey('Album',on_delete=models.CASCADE,null=True,blank=True)


    def __str__(self):
        return self.title
    
    class Meta:
        ordering=["id"]

class Album(models.Model):
    name=models.CharField(max_length=60)
