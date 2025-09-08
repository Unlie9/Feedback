from rest_framework import serializers

from apps.feedback.models import Feedback


class FeedbackListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feedback
        fields = (
            "created_at",
            "company_name",
            "sender_name",
            "description",
        )
