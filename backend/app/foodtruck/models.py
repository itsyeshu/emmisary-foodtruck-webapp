from django.db import models
from .utils import getDistanceUtil
from math import radians

FOOD_TRUCK_TYPE_CHOICES = (
  ("truck", "Truck"),
  ("push_cart", "Push Cart")
)

class FoodTruck(models.Model):
  name = models.CharField(max_length=255)
  type = models.CharField(choices=FOOD_TRUCK_TYPE_CHOICES, max_length=31, default="truck")
  items = models.CharField(max_length=255, default="")
  address = models.CharField(max_length=255)
  latitude = models.FloatField()
  longitude = models.FloatField()
  days_hours = models.CharField(max_length=255)

  def getDistance(self, lat, lon):
    distance =  getDistanceUtil(radians(self.latitude), radians(self.longitude), radians(lat), radians(lon))
    print(distance, self.latitude, self.longitude)
    return distance

  def __str__(self):
    return self.name
