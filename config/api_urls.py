from django.urls import re_path, include

app_name = "api_urls"
urlpatterns = [
    re_path(r"resume/", include("resumey.resume.api_urls"), name="resume"),
]
