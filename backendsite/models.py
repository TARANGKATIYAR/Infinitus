from django.db import models

class Dream(models.Model):
    title = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} by {self.name}"