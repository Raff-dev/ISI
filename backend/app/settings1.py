from app.settings_common import *

APP_NAME = "django1"

LOCAL_APPS = ["drinks"]
INSTALLED_APPS += LOCAL_APPS

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:8080",
    "http://camunda:8080",
]
CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
    "http://localhost:8080",
    "http://camunda:8080",
]
