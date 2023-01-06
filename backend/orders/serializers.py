from orders.models import OrderLog
from rest_framework import serializers


class OrderLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderLog
        fields = "__all__"
