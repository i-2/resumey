import logging
from json import loads
from django.shortcuts import render
from django.views.generic import TemplateView
from resumey.resume.models import ResumeDetail

# Create your views here.
log = logging.getLogger("django")


class BuilderView(TemplateView):
    template_name = "builder.html"


class ResumeView(TemplateView):
    template_name = "resume.html"

    def get_context_data(self, **kwargs):
        try:
            resume_id = kwargs["id"]
            resume = ResumeDetail.objects.get(id=resume_id)
            model_dict = loads(resume.resume_json)
            return model_dict
        except ResumeDetail.DoesNotExist:
            return {"model": None}
