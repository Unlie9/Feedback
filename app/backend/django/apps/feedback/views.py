import os

from rest_framework import generics

from apps.feedback.models import Feedback
from apps.feedback.serializers import FeedbackListSerializer
from django.conf import settings


class FeedbackListView(generics.ListAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackListSerializer

    def get(self, request, *args, **kwargs):
        print("TEST")
        print(settings.BASE_DIR)

        path1 = os.path.join("my_directory", "my_file.txt")
        print(path1)

        log_dir = os.path.join(settings.BASE_DIR, "logs", "warning.log")

        print(log_dir)

        return self.list(request, *args, **kwargs)
