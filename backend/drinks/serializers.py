from drinks.models import DrinkRequest
from rest_framework import serializers


class DrinkRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = DrinkRequest
        fields = "__all__"
