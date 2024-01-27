from django.contrib import admin
from .models import ( FoodTruck )

@admin.register(FoodTruck)
class FoodTruckAdmin(admin.ModelAdmin):
  pass