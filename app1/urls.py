from django.urls import path,include
from . import views
urlpatterns = [
    path('', views.index),
    path('cbv/', views.HomeView.as_view()),

]