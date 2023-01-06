from django.db import models


# Create your models here.
class DrinkRequest(models.Model):
    username = models.CharField(max_length=100)
    drink_id = models.IntegerField()
    request_valid = models.BooleanField(default=True)
    timestamp = models.DateTimeField(auto_now_add=True)
