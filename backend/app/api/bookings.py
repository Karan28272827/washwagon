from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Booking(BaseModel):
    id: int
    customer_name: str
    pickup_date: str
    status: str

bookings_db = [
    {"id": 1, "customer_name": "Alice", "pickup_date": "2025-09-01", "status": "Pending"},
    {"id": 2, "customer_name": "Bob", "pickup_date": "2025-09-02", "status": "Completed"},
]

@router.get("/bookings", response_model=List[Booking])
async def get_bookings():
    return bookings_db
