from django.shortcuts import render
from django.http import JsonResponse
from .models import Dream
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

# Create your views here.
def home(request):
    return render(request, "premium-index.html")

def genai(request):
    return render(request, "epic-genai.html")

def arvr(request):
    return render(request, "premium-arvr.html")

def concerns(request):
    return render(request, "premium-concerns.html")

def analytic(request):
    return render(request, "premium-analyticalai.html")

def padlet(request):
    dreams = Dream.objects.order_by('-created_at')  # newest first
    return render(request, 'padlet.html', {'dreams': dreams})

def submit_dream(request):
    data = json.loads(request.body)
    title = data.get('title')
    name = data.get('name')
    description = data.get('description')

    Dream.objects.create(title=title, name=name, description=description)
    return JsonResponse({'status': 'success'})

# def genai(request):
#     return render(request, "genai.html")

def vision(request):
    return render(request, "premium-vision.html")