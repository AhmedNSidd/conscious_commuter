# Generated by Django 3.0.2 on 2020-01-12 10:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0003_auto_20200112_0700'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trip',
            name='favorites',
        ),
    ]