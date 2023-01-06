from django.urls import include, path
from orders.views import OrderLogViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("orders", OrderLogViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
