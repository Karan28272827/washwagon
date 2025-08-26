# Laundry Booking Backend

This is the FastAPI backend for the Laundry Booking application.

## Prerequisites

- Python 3.12.5
- pip
- Virtualenv (recommended)

# Install dependencies
pip install -r requirements.txt

# Run the server

uvicorn app.main:app --reload

The API will be available at `http://localhost:8000`.

## Project Structure

- `app/main.py`: Application entrypoint, includes API routers and middleware.
- `app/api/`: Folder containing API route modules like `bookings.py`.

## API

- The main API prefix is `/api`.
- Example endpoint: `/api/bookings` to get booking data.

## Notes

- CORS is configured to allow requests from `http://localhost:3000` (React frontend).
- Use this backend to handle bookings, orders, payment processing, and delivery status.