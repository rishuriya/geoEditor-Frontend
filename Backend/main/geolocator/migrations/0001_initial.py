# Generated by Django 4.1.7 on 2023-02-25 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GeoData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=100)),
                ('wiki', models.CharField(max_length=100)),
                ('year', models.IntegerField()),
                ('value', models.IntegerField(default=0)),
            ],
        ),
    ]
