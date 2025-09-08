from apps.base.models import BaseModel
from django.db import models
from django.db.models import Index


class Feedback(BaseModel):

    # NOTE add Custom User model in future
    # sender = "CustomUser"
    # NOTE add Company model in future
    # company = ""

    company_name = models.CharField(max_length=64, blank=True)
    sender_name = models.CharField(max_length=64, blank=True)

    description = models.TextField()

    class Meta:
        verbose_name = "Feedback"
        verbose_name_plural = "Feedbacks"
        db_table = "feedback"
        indexes = [
            Index(fields=["company_name"], name="feedback_company_idx"),
            Index(fields=["sender_name"], name="feedback_sender_idx"),
        ]

    def __str__(self) -> str:
        return f"Feedback, {self.id}"

    def get_feedback_from_name(self):
        # if self.from_authorized_user:
        #     return self.from_authorized_user.name
        return self.sender_name
