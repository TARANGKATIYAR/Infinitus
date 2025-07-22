"""
URL configuration for infinitus project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from backendsite import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name="home"),
    path('ar-vr', views.arvr, name="arvr"),
    path('concerns', views.concerns, name="concerns"),
    path('analytical-ai', views.analytic, name="analytic"),
    path('submit', views.submit_dream, name='submit_dream'),
    path('padlet', views.padlet, name="padlet"),
    path('vision', views.vision, name="vision"),
    path("gen-ai", views.genai, name="genai")
    # path('', views.home, name="home"),
]
