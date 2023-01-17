#!/bin/sh

echo "Updating dependencies"
poetry install --only main --no-update

echo "Applying migrations"
python manage.py migrate

echo "Creating default superuser"
python manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'admin')" > /dev/null 2>&1

echo "Starting server"
python manage.py runserver 0.0.0.0:8000
