# Generated by Django 3.0.2 on 2020-01-12 04:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='cf_goal',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
