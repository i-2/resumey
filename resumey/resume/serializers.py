from rest_framework import serializers
from resumey.resume.models import ResumeDetail
from datetime import datetime
from json import JSONEncoder, dumps


class ResponseJSONEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, (datetime,)):
            return obj.strftime("%Y-%m-%d")
        return JSONEncoder.default(self, obj)


class PersonalDetailSerializer(serializers.Serializer):
    firstName = serializers.CharField(required=True)
    lastName = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    phone = serializers.CharField(required=True)
    country = serializers.CharField(required=True)
    city = serializers.CharField(required=True)
    address = serializers.CharField(required=True)
    pinCode = serializers.IntegerField(required=True)


class SummarySerializer(serializers.Serializer):
    summary = serializers.CharField(required=True)


class SkillSerializer(serializers.Serializer):
    skillName = serializers.CharField(required=True)
    skillRating = serializers.CharField(required=True)


class EducationSerializer(serializers.Serializer):
    school = serializers.CharField(required=True)
    degree = serializers.CharField(required=True)
    start = serializers.DateTimeField(
        required=True, format="%Y-%m-%d %H:%M:%S"
    )
    end = serializers.DateTimeField(required=True, format="%Y-%m-%d %H:%M:%S")
    city = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    country = serializers.CharField(required=True)


class EmploymentSerializer(serializers.Serializer):
    employer = serializers.CharField(required=True)
    designation = serializers.CharField(required=True)
    start = serializers.DateTimeField(
        required=True, format="%Y-%m-%d %H:%M:%S"
    )
    end = serializers.DateTimeField(required=True, format="%Y-%m-%d %H:%M:%S")
    summary = serializers.CharField(required=True)


class SocialSerializer(serializers.Serializer):
    linkedin = serializers.URLField(required=True)
    twitter = serializers.URLField(required=True)
    github = serializers.URLField(required=True)


class ResumeSerializer(serializers.Serializer):

    personal = PersonalDetailSerializer(required=True)
    social = SocialSerializer(required=True)
    skills = SkillSerializer(required=True, many=True)
    education = EducationSerializer(required=True, many=True)
    employment = EmploymentSerializer(required=True, many=True)
    summary = SummarySerializer(required=True)

    def create(self, validated_data):
        json_response = dumps(validated_data, cls=ResponseJSONEncoder)
        resume = ResumeDetail(resume_json=json_response)
        resume.save()
        return resume
