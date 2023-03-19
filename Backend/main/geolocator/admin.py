from django.contrib import admin

from .models import GeoData, LastUpdated

admin.site.register(GeoData)
admin.site.register(LastUpdated)
# Register your models here.
