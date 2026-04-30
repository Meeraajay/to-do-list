from django.db import models

# Create your models here.
class book(models.Model):
    bookid = models.IntegerField()
    bname = models.CharField(max_length=100)

class reader(models.Model):
    rname = models.CharField(max_length=100)
    rid = models.IntegerField()




