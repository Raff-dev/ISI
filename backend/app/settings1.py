from app.settings_common import *

APP_NAME = APP_NAME_1

LOCAL_APPS = ["drinks"]
INSTALLED_APPS += LOCAL_APPS

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / f"db_{APP_NAME}.sqlite3",
    }
}

CSRF_TRUSTED_ORIGINS = ["http://localhost:3000"]
CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
]
