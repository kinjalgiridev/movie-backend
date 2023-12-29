# Express MongoDB Project

## Project Structure

- **controllers**
  - `movieController.js`: Contains the functions for handling movie-related routes.
  - `authController.js`: Contains the functions for handling authentication routes.
- **models**
  - `movie.js`: Defines the Movie model using Mongoose.
  - `user.js`: Defines the User model using Mongoose.
- **routes**
  - `movieRoutes.js`: Defines the routes for movie-related operations.
  - `authRoutes.js`: Defines the routes for user authentication.
- **.env**: Configuration file for environment variables.
- **app.js**: Main application file.
- **package.json**: Node.js package configuration.

## Dependencies

- `express`: Web application framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `multer`: Middleware for handling `multipart/form-data`, used for file uploads.
- `dotenv`: Loads environment variables from a `.env` file.
- `cors`: Middleware to enable Cross-Origin Resource Sharing (CORS).

## Setup

### 1. Install dependencies:

```bash
npm install
```

### 2. Create a .env file in the project root and add the following:

```bash
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace your_mongodb_connection_string with your MongoDB connection string.

### 3. Running the Application

```bash
npm start
```

The server will start at http://localhost:3000.

## API Routes

### Register User

**Endpoint:** `POST /auth/register`
**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
### Login User

**Endpoint:** `POST /auth/login`
**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Create Movie

**Endpoint:** `POST /movies`

**Request Body:**

```json
{
  "title": "Movie Title",
  "publishingYear": 2023
}
```

Include a file (poster) in the request for the movie poster.

## Get All Movies

**Endpoint:** `GET /getall`

**Optional Query Parameters:**

- `page`: Page number (default is 1)
- `limit`: Number of items per page (default is 8)

## Edit Movie

**Endpoint:** `PATCH /movies/:id`

**Request Body:**

```json
{
  "title": "Updated Title",
  "publishingYear": 2024
}
```

Optional: Include a file (poster) in the request to update the movie poster.

## Get Movie by ID

**Endpoint:** `GET /movies/:movieId`
