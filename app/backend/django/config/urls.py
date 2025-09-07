from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("config.api.urls")),
    # path('api/feedbacks/', include('apps.feedback.urls'))
]
