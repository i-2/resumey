from django.urls import path, re_path

from resumey.builder import views

urlpatterns = [
    path("", views.BuilderView.as_view()),
    re_path(r"^r/(?P<id>[0-9]+)$", views.ResumeView.as_view()),
]
