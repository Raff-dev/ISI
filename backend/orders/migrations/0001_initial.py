# Generated by Django 4.1.5 on 2023-01-06 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='OrderLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('drink_id', models.IntegerField()),
                ('order_count', models.IntegerField()),
            ],
        ),
    ]
