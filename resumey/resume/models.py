from django.db import models


# Create your models here.
class ResumeDetail(models.Model):

    DEFAULT_JSON_VALUE = {
        "personal": {},
        "skills": [],
        "summary": {},
        "education": [],
        "employment": [],
        "social": {},
    }

    id = models.AutoField(primary_key=True)
    resume_json = models.JSONField(
        blank=False, default=dict(DEFAULT_JSON_VALUE)
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
