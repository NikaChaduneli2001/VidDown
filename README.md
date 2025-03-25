# Video Downloader Backend Application

A Node.js backend application that provides an API for downloading videos. The application uses Express.js and includes Swagger documentation for API endpoints.

## Features

- RESTful API endpoints for video downloading
- Swagger documentation for API reference
- Express.js server with modular architecture
- Video download functionality

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd VidDown
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server with nodemon (auto-reload on changes):

```bash
npm start
```

The server will start on port 3000 by default.

## API Documentation

Once the server is running, you can access the Swagger documentation at:
```
http://localhost:3000/api-docs
```

## Project Structure

```
.
├── app/
│   ├── config/
│   ├── routes/
│   ├── services/
│   └── utils/
├── downloads/
├── node_modules/
├── server.js
└── package.json
```

## Dependencies

- express: ^4.21.2
- nodemon: ^3.1.9
- swagger-jsdoc: ^6.2.8
- swagger-ui-express: ^5.0.1

## Author

Nika Chaduneli

## License

ISC 