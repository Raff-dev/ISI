from django.urls import path
from drinks.views import enquiry

urlpatterns = [
    path("enquiry/", enquiry, name="enquiry"),
]
