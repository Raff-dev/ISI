from drinks.models import DrinkEnquiry
from drinks.serializers import DrinkEnquirySerializer
from rest_framework.viewsets import ModelViewSet


class DrinkEnquiryViewSet(ModelViewSet):
    queryset = DrinkEnquiry.objects.all()
    serializer_class = DrinkEnquirySerializer
