from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import bookings 

app = FastAPI()

origins = [
    "http://localhost:3000",  # React app address
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Define routes here
app.include_router(bookings.router, prefix="/api", tags=["bookings"])

@app.get("/")
async def root():
    return {"message": "Welcome to Laundry Booking API"}
