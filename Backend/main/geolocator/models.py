from django.db import models



class GeoData(models.Model):
    country = models.CharField(max_length=100)
    lower_bound = models.IntegerField()
    upper_bound = models.IntegerField()
    year = models.IntegerField()
    mean = models.IntegerField(default=0)

    def __str__(self):
        return self.country