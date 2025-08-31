from . import repositories

def create_order(data, idempotency_key: str):
    # check for existing order
    existing = repositories.get_by_idempotency_key(idempotency_key)
    if existing:
        return existing, False  # not newly created

    # create new order
    order = repositories.create_order(
        customer_id=data["customer_id"],
        total_amount=data["total_amount"],
        key=idempotency_key,
    )
    return order, True
