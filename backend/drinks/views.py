from drinks.models import DrinkRequest
from drinks.serializers import DrinkRequestSerializer
from rest_framework import viewsets


class DrinkRequestViewSet(viewsets.ModelViewSet):
    queryset = DrinkRequest.objects.all()
    serializer_class = DrinkRequestSerializer
