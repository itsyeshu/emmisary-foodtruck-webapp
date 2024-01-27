from django.urls import path, include
from rest_framework import routers
from foodtruck.views import FoodTruckViewSet, FoodTruckNearMeViewSet

router = routers.DefaultRouter()
router.register('foodtrucks', FoodTruckViewSet, basename='foodtruck')
router.register('foodtrucksnearme', FoodTruckNearMeViewSet, basename='foodtrucknearme')


urlpatterns = [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

urlpatterns += router.urls