from django.db import models


class DrinkEnquiry(models.Model):
    username = models.CharField(max_length=100)
    drink_id = models.IntegerField()
    request_valid = models.BooleanField(default=True)
    to_lang = models.CharField(max_length=3)
    data = models.JSONField(default=dict, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
