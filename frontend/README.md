# Laundry Booking Frontend

This is the React frontend for the Laundry Booking application.

## Prerequisites

- Node.js (v14 or higher)
- npm (or yarn)

## Setup

1. Install dependencies

npm install

2. Run the development server

npm start

3. Open your browser and navigate to: http://localhost:3000

## Project Structure

- `public/index.html`: Static HTML file served by React.
- `src/index.js`: React app entrypoint.
- `src/App.js`: Main application component.
- `src/pages/Bookings.js`: Example page component fetching data from backend.
- `src/api.js`: Axios instance configured to communicate with the FastAPI backend.

## Configuration

- The React app expects the backend API to be running at `http://localhost:8000`.
- API calls are made using Axios configured in `src/api.js`.

## Notes

- Make sure the backend FastAPI server is running before starting the frontend to enable API communication.
- This project uses React hooks and functional components.