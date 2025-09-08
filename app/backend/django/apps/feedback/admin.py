from apps.feedback.models import Feedback
from django.contrib import admin


@admin.register(Feedback)
class CVAdmin(admin.ModelAdmin):
    list_display = ("id", "updated_at", "created_at")
    list_filter = ("created_at",)
