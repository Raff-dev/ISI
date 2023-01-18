from django.urls import include, path
from drinks.views import DrinkEnquiryViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register("enquiry", DrinkEnquiryViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
