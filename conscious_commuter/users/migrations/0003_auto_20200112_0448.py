# Generated by Django 3.0.2 on 2020-01-12 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profile_cf_goal'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='cf_goal',
            field=models.IntegerField(blank=True),
        ),
    ]
