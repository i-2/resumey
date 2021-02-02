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

    template_prefix = "resume"

    def render_to_response(self, context, **response_kwargs):
        """
        Return a response, using the `response_class` for this view, with a
        template rendered with the given context.

        Pass response_kwargs to the constructor of the response class.
        """
        response_kwargs.setdefault("content_type", self.content_type)
        template_name = self.get_template_names(context)
        return self.response_class(
            request=self.request,
            template=[
                f"{self.template_prefix}/{self.template_prefix}-{template_name}.html"
            ],
            context=context,
            using=self.template_engine,
            **response_kwargs,
        )

    def get_template_names(self, context):
        return context.get("theme", "plain")

    def get_context_data(self, **kwargs):
        try:
            resume_id = kwargs["id"]
            resume = ResumeDetail.objects.get(id=resume_id)
            model_dict = loads(resume.resume_json)
            return model_dict
        except ResumeDetail.DoesNotExist:
            return {"model": None}
