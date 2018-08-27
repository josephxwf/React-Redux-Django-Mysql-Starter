from django.urls import path, include
from . import views

urlpatterns = [
  path('', views.startup, name='startup'),
  path('getProduct/<str:policy_code>', views.getProduct, name='get_product'),
  path('createProduct', views.createProduct, name='create_product')

];
