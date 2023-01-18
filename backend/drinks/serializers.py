from drinks.models import DrinkEnquiry
from rest_framework import serializers


class DrinkEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = DrinkEnquiry
        fields = "__all__"
