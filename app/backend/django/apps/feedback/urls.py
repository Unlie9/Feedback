from django.urls import path

from apps.feedback.views import FeedbackListView

app_name = 'feedback'

urlpatterns = [
  path('list/', FeedbackListView.as_view(), name='feedbacks-list')
]