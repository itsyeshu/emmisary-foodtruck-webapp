from django.db import migrations
from foodtruck.models import FoodTruck
from pathlib import Path

# Utils
from app.utils import setSeedData


# Constants
considerColumns = [1, 2, 5, 11, 14, 15, 17]
columns = [ "locationId", "name", "type", "id", "description", "address", "blocklot", "block", "lot", "permit", "status", "items", "x", "y", "latitude","longitude", "schedule", "days_hours", "NOISent", "approved", "received", "priorPermit", "expirationDate", "location", "firePreventionDistrict", "policeDistrict", "supervisorDistrict", "zipCode", "oldNeighborhood" ]

def parseRow(rowData):
  data = {}

  # dates_hours is empty
  if not rowData[17]:
    raise Exception("Empty data")
  
  for index in considerColumns:
    column = columns[index]
    if column == "latitude" or column == "longitude":
      data[column] = float(rowData[index])
    elif column == "type":
      data[column] = rowData[index].lower().replace(' ', '_')
    else:
      data[column] = rowData[index]
  return data

def seed_data(apps, schema_editor):
  filePath = Path(__file__).resolve().parent.parent / "seeders" / "food-truck-data.csv"

  [foodTrucksAdded, totalFoodTrucks] = setSeedData(filePath, FoodTruck, parseRow, failSilently=True)
  print(f' Added {foodTrucksAdded} out of {totalFoodTrucks} entries to FoodTruck ', end='')
  
class Migration(migrations.Migration):

    dependencies = [
      ('foodtruck', '0001_initial'),
      ('foodtruck', '0002_foodtruck_items_alter_foodtruck_type'),
    ]

    operations = [
        migrations.RunPython(seed_data),
    ]