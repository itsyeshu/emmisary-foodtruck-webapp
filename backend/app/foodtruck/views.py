import json
from rest_framework import viewsets
from rest_framework.response import Response
from .models import FoodTruck
from .serializers import FoodTruckSerializer

class FoodTruckViewSet(viewsets.ModelViewSet):
  queryset = FoodTruck.objects.all()
  serializer_class = FoodTruckSerializer

  # Access class
  access_class = [ ]

class FoodTruckNearMeViewSet(viewsets.ViewSet):
  # POST request
  def create(self, request):
    rawData = request.body
    parsedData = {}
    
    try:
      parsedData = json.loads(rawData)
    except:
      return Response({
        "message": "Invalid form of Data in POST request"
      }, status = 422)
    
    lat = parsedData.get('latitude', None)
    lon = parsedData.get('longitude', None)

    if(not lat and not lon):
      return Response({
        "message": "Missing required field(s) : latitude, longitude"
      }, status = 400)
    
    # Raise query on FoodTrucks
    foodTrucksNearMeQuerySet = FoodTruck.objects.all()

    foodTrucksNearMe = FoodTruckSerializer(sorted(foodTrucksNearMeQuerySet, key = (lambda instance : instance.getDistance(lat, lon)), reverse=False)[:5], many = True)

    return Response({
      "message": "Successfully got the data",
      "data": {
        "foodTrucks" : foodTrucksNearMe.data
      }
    })