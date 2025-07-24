from django.shortcuts import render
from django.http import JsonResponse
from .models import Dream
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

# Create your views here.
def home(request):
    return render(request, "index.html")

def genai(request):
    return render(request, "genai.html")

def arvr(request):
    return render(request, "arvr.html")

def concerns(request):
    return render(request, "concerns.html")

def analytic(request):
    return render(request, "analyticalai.html")

def padlet(request):
    dreams = Dream.objects.order_by('-created_at')  # newest first
    return render(request, 'padlet.html', {'dreams': dreams})

def submit_dream(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        name = request.POST.get('name')
        description = request.POST.get('description')
        
        if title and name and description:
            Dream.objects.create(title=title, name=name, description=description)
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'error': 'All fields are required'}, status=400)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)

def vision(request):
    return render(request, "vision.html")