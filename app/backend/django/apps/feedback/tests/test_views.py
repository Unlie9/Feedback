from rest_framework import status
from rest_framework.test import APITestCase

from apps.feedback.tests.utils import TEST_DESCRIPTION, test_create_feedback
from django.urls import reverse


class FeedbackListViewTest(APITestCase):

    def setUp(self):
        self.main_test_feedback = test_create_feedback()
        test_create_feedback()

    def test_main_feedback(self):
        self.assertEqual(self.main_test_feedback.description, TEST_DESCRIPTION)

    def test_feedback_list(self):
        url = reverse("feedback:feedbacks-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0]["description"], TEST_DESCRIPTION)
