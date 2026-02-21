# Student Store -- Custom 3D Printing Platform

A full-stack application for managing products, custom 3D print
orders, file uploads via GridFS, testimonials, and authentication.

------------------------------------------------------------------------

##  Features

-   User authentication (JWT)
-   Product catalog
-   Custom order submissions with GridFS file uploads
-   Testimonials system
-   Admin role support
-   GridFS file storage
-   Deployable frontend + backend

------------------------------------------------------------------------

# Setup Instructions

### Install server dependencies

``` bash
cd server
npm install
```

### Install client dependencies

``` bash
cd client
npm install
```

#### Note: Two servers need to be running for this to work, both for the client and the server.

------------------------------------------------------------------------

# Environment Variables

Create a `.env` file inside `/server` using the following template:

    PORT=5000
    MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/student-store
    JWT_SECRET=supersecretjwtkey

Required variables: - PORT - MONGO_URI - JWT_SECRET

------------------------------------------------------------------------

# Running Locally

Start Backend:

``` bash
cd server
npm run dev
```

Start Frontend:

``` bash
cd client
npm start
```

Frontend: http://localhost:3000

Backend: http://localhost:5000

------------------------------------------------------------------------


## MongoDB Atlas

-   Create cluster
-   Add MONGO_URI to backend environment variables

------------------------------------------------------------------------

# Demo Data

-   Admin login: admin@example.com / admin123
-   Submit custom orders via /custom-order
-   Files stored in GridFS collections:
    -   uploads.files
    -   uploads.chunks

------------------------------------------------------------------------

# Technologies Used

Frontend: - React - React Router

Backend: - Node.js - Express - MongoDB - Mongoose - GridFS - Multer -
JWT

Deployment: - Netlify - MongoDB Atlas

------------------------------------------------------------------------

# Authors

## Kaden, Ryder, Robert, Karam

#### Student Store Project