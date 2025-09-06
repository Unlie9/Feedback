from django.urls import path

from apps.feedback.views import FeedbackListView

app_name = 'feedback'

urlpatterns = [
  path('v1/list', FeedbackListView.as_view(), name='feedback_list')
]
