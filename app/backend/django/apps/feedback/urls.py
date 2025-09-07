from apps.feedback.views import FeedbackListView

from django.urls import path

app_name = 'feedback'

urlpatterns = [path('list/', FeedbackListView.as_view(), name='feedbacks-list')]
