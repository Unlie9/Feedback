from django.urls import include, path

urlpatterns = [
    path("feedbacks/", include("apps.feedback.urls")),
]
