from django.shortcuts import render
from rest_framework import viewsets, response, request
from rest_framework.decorators import api_view
from .models import GeoData
from .serializer import GeoDataSerializer

class GeoDataViewSet(viewsets.ModelViewSet):
    queryset = GeoData.objects.all()
    serializer_class = GeoDataSerializer

@api_view(['GET'])
def getGeoData(request):
    year = 2023
    wiki = ''
    country = ''
    wiki, country, year = request.GET.get('wiki'), request.GET.get('country'), request.GET.get('year')
    print(wiki,"",country,"",year)
    data = GeoData.objects.all()
    if wiki=="All" and country=="All" and year=="All":
        data = GeoData.objects.all()
    elif wiki=="All" and country=="All":
        data = GeoData.objects.filter(year=year)
    elif wiki=="All" and year=="All":
        data = GeoData.objects.filter(country=country)
    elif country=="All" and year=="All":
        data = GeoData.objects.filter(wiki=wiki)
    elif wiki=="All":
        data = GeoData.objects.filter(country=country, year=year)
    elif country=="All":
        data = GeoData.objects.filter(wiki=wiki, year=year)
    elif year=="All":
        data = GeoData.objects.filter(wiki=wiki, country=country)
    serializer = GeoDataSerializer(data, many=True)
    return response.Response(serializer.data)

    