from django.urls import path, include

urlpatterns = [
    path("feedbacks/", include("apps.feedback.urls")),
]
