from django.db import models
from apps.base.models import BaseModel


class Feedback(BaseModel):

    description = models.TextField()

    class Meta:
        verbose_name = 'Feedback'
        verbose_name_plural = 'Feedbacks'
        db_table = 'feedback'
        # indexes = []

    def __str__(self) -> str:
        return f"Feedback, {self.id}"
