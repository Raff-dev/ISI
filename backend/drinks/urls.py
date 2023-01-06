from django.urls import include, path
from drinks.views import DrinkRequestViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("drinks", DrinkRequestViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
