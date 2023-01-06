from django.db import models


class OrderLog(models.Model):
    drink_id = models.IntegerField()
    order_count = models.IntegerField()
