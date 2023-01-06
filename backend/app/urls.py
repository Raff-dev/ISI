from django.conf import settings
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
]

local_patterns = [
    path("", include(app_name + ".urls"))
    for app_name in settings.LOCAL_APPS
]

urlpatterns += local_patterns
