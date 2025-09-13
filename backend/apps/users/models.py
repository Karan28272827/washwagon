from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class User(AbstractUser):
    """
    Custom user model made by extending Abstract User 
    """
    # username, password, email, first_name, last_name is already included
    phone_number = models.CharField(max_length=15, blank=False, null=False)
    
    def __str__(self):
        return self.email
    

class Address(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='addresses'
    )
    
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=10)
    
    def __str__(self):
        return f"{self.street_address}, {self.city} ({self.user.email})"
    

    