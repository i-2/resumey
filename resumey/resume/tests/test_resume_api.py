from os.path import join, dirname
from json import loads
from django.test import TestCase
from django.shortcuts import reverse
from rest_framework import status
from resumey.resume.models import ResumeDetail


class ResumeAPITestCase(TestCase):
    def setUp(self):
        fixture_path = join(dirname(__file__), "create_resume_fixture.json")
        self._payload_str = open(fixture_path, "r").read()
        self._payload = loads(self._payload_str)
        self.resume = ResumeDetail(resume_json=self._payload_str)
        self.resume.save()
        self.create_api_url = reverse("api:resume:create_resume")
        self.get_api_url = reverse(
            "api:resume:fetch_resume", kwargs={"id": self.resume.id}
        )

    def test_create_api_url(self):
        response = self.client.post(
            self.create_api_url,
            data=self._payload,
            content_type="application/json",
        )
        self.assertEquals(response.status_code, status.HTTP_200_OK)

    def test_fetch_resume_api(self):
        response = self.client.get(self.get_api_url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
