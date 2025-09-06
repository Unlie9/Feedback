from django.contrib import admin

from apps.feedback.models import Feedback


@admin.register(Feedback)
class CVAdmin(admin.ModelAdmin):
    list_display = ('id', 'updated_at', 'created_at')
    list_filter = ("created_at",)
