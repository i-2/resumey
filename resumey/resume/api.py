import logging
from json import loads
from django.http import Http404
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status
from rest_framework.exceptions import ValidationError
from resumey.resume.models import ResumeDetail
from resumey.resume.serializers import ResumeSerializer

log = logging.getLogger("django")


class CreateResumeAPI(CreateAPIView):

    serializer_class = ResumeSerializer
    permission_classes = (permissions.AllowAny,)

    def create(self, request):
        try:
            log.debug(request.data)
            serializer = self.get_serializer(
                data=request.data, context={"request": request}
            )
            if serializer.is_valid(raise_exception=True):
                resume = serializer.save()
                return Response(
                    {"id": resume.id, "json": loads(resume.resume_json)},
                    status=status.HTTP_201_CREATED,
                )
        except ValidationError as ve:
            log.exception("[Errored]: %s", ve)
            return Response(
                {
                    "error": ve.detail,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )


class FetchResumeAPI(RetrieveAPIView):

    serializer_class = ResumeSerializer
    permission_classes = (permissions.AllowAny,)

    lookup_field = "id"

    def get_object(self):
        try:
            log.debug("[RESUME GET]: %s", self.kwargs["id"])
            resume = ResumeDetail.objects.get(id=self.kwargs["id"])
            return loads(resume.resume_json)
        except ResumeDetail.DoesNotExist:
            raise Http404
