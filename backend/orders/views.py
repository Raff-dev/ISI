from orders.models import OrderLog
from orders.serializers import OrderLogSerializer
from rest_framework import viewsets


class OrderLogViewSet(viewsets.ModelViewSet):
    queryset = OrderLog.objects.all()
    serializer_class = OrderLogSerializer
