from django.urls import path, include

urlpatterns = [
    path("v1/", include("config.api.v1.urls")),
]
