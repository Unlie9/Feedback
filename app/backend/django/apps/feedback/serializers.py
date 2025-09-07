from apps.feedback.models import Feedback
from rest_framework import serializers


class FeedbackListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feedback
        fields = ("created_at", "description")
