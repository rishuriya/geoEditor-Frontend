from django.db import models

# Create your models here.

class GeoData(models.Model):
    country = models.CharField(max_length=100)
    lower_bound = models.IntegerField()
    upper_bound = models.IntegerField()
    month = models.CharField(max_length=100)
    year = models.IntegerField()
    mean = models.IntegerField(default=0)

    def __str__(self):
        return self.country