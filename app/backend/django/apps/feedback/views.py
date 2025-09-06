from rest_framework import generics

from apps.feedback.models import Feedback
from apps.feedback.serializers import FeedbackListSerializer


class FeedbackListView(generics.ListAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackListSerializer
