from django.urls import re_path
from resumey.resume import api

app_name = "resume"
urlpatterns = [
    re_path(r"^$", api.CreateResumeAPI.as_view(), name="create_resume"),
    re_path(
        r"^(?P<id>[0-9]+)$", api.FetchResumeAPI.as_view(), name="fetch_resume"
    ),
]
