from django_cron import CronJobBase, Schedule
from geolocator.management.commands.dataScrapper import Command

class CronJob(CronJobBase):
    RUN_EVERY_MINS = 10080 # Run every week
    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'geolocator.dataScrapping'    # a unique code

    def do(self):
        # Call your management command here
        command = Command()
        command.handle()
