from apps.feedback.models import Feedback

TEST_DESCRIPTION = "You are good candidate, and have strong skills in Python"


def test_create_feedback() -> Feedback:

    feedback = Feedback.objects.create(description=TEST_DESCRIPTION)

    return feedback
