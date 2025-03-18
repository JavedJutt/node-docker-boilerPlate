# Student Portal Backend

A backend service for the Student Portal application built with Node.js and Express.

## Overview

This project serves as the backend API for the Student Portal system, providing endpoints for managing student data and related functionalities.

## Prerequisites

- Node.js 20 or higher
- npm (Node Package Manager)
- Docker (optional, for containerized deployment)

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd student-portal-be
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will start running at `http://localhost:8000`

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t student-portal-be .
   ```

2. Run the container:
   ```bash
   docker run -p 8000:8000 student-portal-be
   ```

The application will be accessible at `http://localhost:8000`

## API Endpoints

### GET /
- Description: Health check endpoint
- Response: `{"message": "Hello World!"}`

## Project Structure

```
├── app.js              # Main application entry point
├── package.json        # Project dependencies and scripts
├── Dockerfile         # Docker configuration
└── README.md          # Project documentation
```

## Development

### Dependencies

- Express.js - Web application framework

### Environment Variables

- `PORT` - Server port (default: 8000)

## License

ISC