from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
def index(request):
    return render(request, 'root.html')

class HomeView(TemplateView):
    template_name = 'okay.html'