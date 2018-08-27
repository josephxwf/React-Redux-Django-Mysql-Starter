from django.shortcuts import render
from pdb import set_trace as bp
from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers
import json
from django.views.decorators.csrf import csrf_exempt


import json
# Create your views here.
def index(request):
  # return HttpResponse('Hello from insurance')

  return render(request, 'insurance/index.html', {
    'title': 'Latest policies'
  })

# sub_industry = NAIC_Sub_Industry_Code_11.objects.first()['industry']
@csrf_exempt
def createProduct(request):
  

@csrf_exempt
def getProduct(request):
  