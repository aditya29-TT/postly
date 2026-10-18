# Postly

A full-stack image sharing app. Upload a picture with a caption and description, and watch it appear in a sleek dark neon feed.

**Live demo:** [https://postly-frontend-c29k.onrender.com](https://postly-frontend-c29k.onrender.com)

> The backend runs on Render's free plan, so the first request after a while can take up to a minute while the server wakes up.

---

## Features

- Upload an image with a caption and description
- Browse all posts in a responsive feed
- Dark glassmorphism UI with neon gradients and smooth animations
- Works on desktop and mobile
- Separate React frontend and Node.js REST API

## Tech Stack

**Frontend**
- React (Vite)
- React Router
- Axios
- Plain CSS (glassmorphism, gradients, animations)

**Backend**
- Node.js
- Express
- MongoDB (Mongoose)

**Deployment**
- Render (frontend and backend)

## Project Structure

```
backend first project/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   ├── models/
│   │   ├── services/
│   │   └── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── createpost.jsx
│   │   │   └── feed.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint       | Description                                      |
|--------|----------------|--------------------------------------------------|
| POST   | `/create-post` | Create a post (form data: `image`, `caption`, `description`) |
| GET    | `/posts`       | Get all posts                                    |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and add your own values:

```
MONGO_URI=your_mongodb_connection_string
# add any other keys your backend needs (for example an image upload service key)
```

Start the server (runs on port 3000):

```bash
node server.js
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The app opens at `http://localhost:5173`.

> For local development, make sure the API URLs in `createpost.jsx` and `feed.jsx` point to `http://localhost:3000`. For production, they point to the deployed backend on Render.

## Pages

| Route          | Page                          |
|----------------|-------------------------------|
| `/create-post` | Upload a new post             |
| `/feed`        | View all posts                |

## Future Improvements

- User accounts and login
- Likes and comments
- Delete and edit posts
- Image preview before upload
- Navigation bar between pages

## Author

Made by **Aditya**. Feel free to star the repo if you like it.
