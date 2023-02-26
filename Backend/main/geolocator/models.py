from django.db import models



class GeoData(models.Model):
    country = models.CharField(max_length=100)
    wiki = models.CharField(max_length=100)
    year = models.IntegerField()
    lower_bound = models.IntegerField()
    upper_bound = models.IntegerField()
    value = models.IntegerField(default=0)

    def __str__(self):
        return self.country