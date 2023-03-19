from django.shortcuts import render
from rest_framework import viewsets, response, request
from rest_framework.decorators import api_view
from .models import GeoData, LastUpdated
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
    last_updated = LastUpdated.objects.last()
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
    else:
        data = GeoData.objects.filter(wiki=wiki, country=country, year=year)
    serializer = GeoDataSerializer(data, many=True)
    serializer.data[0]["last_updated"]=last_updated.last_updated
    return response.Response(serializer.data)

    
@api_view(['GET'])
def getParamList(request):
    wikiList = GeoData.objects.values_list('wiki', flat=True).distinct()
    countryList = GeoData.objects.values_list('country', flat=True).distinct()
    yearList = GeoData.objects.values_list('year', flat=True).distinct()
    return response.Response([{'wikiList': wikiList, 'countryList': countryList, 'yearList': yearList}])