from django.db import migrations, models

class Migration(migrations.Migration):
  initial = True
  dependencies = []

  operations = [
    migrations.CreateModel(
      name='FoodTruck',
      fields=[
        ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
        ('name', models.CharField(max_length=255)),
        ('type', models.CharField(choices=[('truck', 'Truck'), ('push_cart', 'Push Cart')], max_length=31)),
        ('address', models.CharField(max_length=255)),
        ('latitude', models.FloatField()),
        ('longitude', models.FloatField()),
        ('days_hours', models.CharField(max_length=255)),
      ],
    ),
  ]