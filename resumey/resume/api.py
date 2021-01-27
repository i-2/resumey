from json import loads
from django.http import Http404
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status
from rest_framework.exceptions import ValidationError
from resumey.resume.models import ResumeDetail
from resumey.resume.serializers import ResumeSerializer


class CreateResumeAPI(CreateAPIView):

    serializer_class = ResumeSerializer
    permission_classes = (permissions.AllowAny,)

    def create(self, request):
        try:
            serializer = self.get_serializer(
                data=request.data, context={"request": request}
            )
            if serializer.is_valid(raise_exception=True):
                resume = serializer.save()
                return Response(
                    {"id": resume.id, "json": loads(resume.resume_json)},
                    status=status.HTTP_200_OK,
                )
        except ValidationError as ve:
            return Response(
                {
                    "error": ve.detail,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )


class FetchResumeAPI(RetrieveAPIView):

    serializer_class = ResumeSerializer
    permission_classes = (permissions.AllowAny, )

    lookup_field = "id"

    def get_object(self):
        try:
            resume = ResumeDetail.objects.get(id=self.kwargs["id"])
            return loads(resume.resume_json)
        except ResumeDetail.DoesNotExist:
            raise Http404