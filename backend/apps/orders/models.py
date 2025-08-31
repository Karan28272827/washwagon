from django.db import models
from django.utils import timezone

class Order(models.Model):
    customer_id = models.UUIDField()
    status = models.CharField(max_length=20, default="pending")
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    idempotency_key = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Order {self.pk} - {self.status}"
