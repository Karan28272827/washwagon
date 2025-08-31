from .models import Order

def get_by_idempotency_key(key: str):
    return Order.objects.filter(idempotency_key=key).first()

def create_order(customer_id, total_amount, key):
    return Order.objects.create(
        customer_id=customer_id,
        total_amount=total_amount,
        idempotency_key=key,
    )
