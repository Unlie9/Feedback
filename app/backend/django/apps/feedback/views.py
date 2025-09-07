from apps.feedback.models import Feedback
from apps.feedback.serializers import FeedbackListSerializer
from rest_framework import generics


class FeedbackListView(generics.ListAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackListSerializer
