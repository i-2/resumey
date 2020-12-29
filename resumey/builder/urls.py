from django.urls import path

from resumey.builder import views

urlpatterns = [
    path("", views.BuilderView.as_view()),
]
