from django.contrib import admin
from .models import book
from .models import reader

# Register your models here.
admin.site.register(book)
admin.site.register(reader)