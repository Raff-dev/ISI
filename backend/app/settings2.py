from app.settings_common import *

APP_NAME = APP_NAME_2

LOCAL_APPS = ["orders"]
INSTALLED_APPS += LOCAL_APPS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / f'db_{APP_NAME}.sqlite3',
    }
}
