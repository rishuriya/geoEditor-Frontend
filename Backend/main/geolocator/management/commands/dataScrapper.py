import requests
from bs4 import BeautifulSoup
import urllib.request
import pandas as pd
from ...models import GeoData, LastUpdated
from django.core.management.base import BaseCommand
import os
from django.utils import timezone

class Command(BaseCommand):
    help = 'Perform my periodic task'

    def handle(self, *args, **options):
        r=requests.get("https://dumps.wikimedia.org/other/geoeditors/")
        print(os.getcwd())
        soup = BeautifulSoup(r.content, 'html.parser')
        headers = ["wiki", "country", "activity_level", "lower_bound", "upper_bound", "month"]
        tsvFile=[]
        for link in soup.find_all('a'):
            if link.get('href')[0:18] == "geoeditors-monthly":
                url="https://dumps.wikimedia.org/other/geoeditors/{}".format(link.get('href'))
                urllib.request.urlretrieve(url, './dataDump/{}'.format(link.get('href')))
                df = pd.read_csv("dataDump/{}".format(link.get('href')), sep='\t', names=headers)
                df["month"]=link.get('href')[19:26]
                tsvFile.append(df)
        merged_df = pd.concat(tsvFile)
        merged_df['year'] = pd.to_datetime(merged_df.month, format='%Y-%m')
        merged_df['year'] = merged_df['year'].apply(lambda x: x.year)

        merged_df.to_csv('master.csv', index=False)

        agg1 = merged_df.groupby(['month', 'year', 'country', 'wiki']).agg({'lower_bound': 'sum', 'upper_bound': 'sum'})
        agg2 = agg1.groupby(['year', 'country', 'wiki']).agg({'lower_bound': 'mean', 'upper_bound': 'mean'}).astype({'lower_bound': int, 'upper_bound': int})
        agg2['mean'] = (agg2['lower_bound'] + agg2['upper_bound'])/2
        agg2.to_csv('masterData.csv', index=True)

        df=pd.read_csv('masterData.csv')

        GeoData.objects.all().delete()

        # Read data from CSV file into a pandas DataFrame
        df = pd.read_csv('masterData.csv')

        # Convert DataFrame to a list of dictionaries
        data = df.to_dict('records')

        # Create and save new objects in MyModel
        for item in data:
            obj = GeoData(
                country=item['country'],
                wiki=item['wiki'],
                year=item['year'],
                lower_bound=item['lower_bound'],
                upper_bound=item['upper_bound'],
                value=item['mean']
            )
            obj.save()
        last_updated = LastUpdated(last_updated=timezone.now())

        # save the instance to the database
        last_updated.save()
