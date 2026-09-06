# 🎬 CineMatch AI

> AI-powered movie recommendations based on your **request, genre, mood, and preferred number of movies**.

🔗 **Live Demo:** https://langchain-movie-recommendation.onrender.com/

CineMatch AI is a full-stack movie recommendation application powered by **Google Gemini** and **LangChain**. Instead of relying on a fixed list of movies, the app uses an LLM to understand the user's preferences and generate personalized recommendations.

---

## ✨ Features

- 🎯 Personalized movie recommendations
- 🎭 Genre-based recommendations
- 😊 Mood-based recommendations
- 🔢 Choose how many movies you want
- 🤖 AI-powered recommendations using Google Gemini
- 🧠 LangChain-powered prompt orchestration
- ⚡ Next.js frontend
- 🚀 Express backend
- 🌐 Fully deployed application

---

## 🚀 Live Demo

Try the application here:

**https://langchain-movie-recommendation.onrender.com/**

The application lets you provide:

- **Movie request** – What kind of movie experience you're looking for
- **Genre** – Your preferred movie genre
- **Mood** – The mood you're looking for
- **Movie count** – How many recommendations you want

---

## 🏗️ Architecture

The project is divided into two main parts:

```text
CineMatch AI
│
├── frontend/
│   └── my-app/
│       ├── Next.js
│       └── React
│
└── backend/
    ├── Express.js
    ├── LangChain
    └── Google Gemini
```

### Request Flow

```text
User
  │
  ▼
Next.js Frontend
  │
  │ HTTP Request
  ▼
Express Backend
  │
  ▼
LangChain
  │
  ▼
Google Gemini
  │
  ▼
AI Movie Recommendations
  │
  ▼
Next.js Frontend
  │
  ▼
User
```

---

## 🛠️ Tech Stack

### Frontend

- **Next.js**
- **React**
- **TypeScript**
- **CSS**

### Backend

- **Node.js**
- **Express.js**
- **TypeScript**
- **LangChain**

### AI

- **Google Gemini**
- `gemini-2.5-flash`
- `@langchain/google`
- `@langchain/core`

### Deployment

- **Render**

---

## 🧠 How the AI Works

The backend uses LangChain to create a structured prompt for Gemini.

The model is instructed to act as a movie recommendation expert and consider:

- The user's request
- Genre
- Mood
- Number of movies

A simplified version of the prompt looks like:

```text
You are a movie recommendation expert.

Return high-quality recommendations based on:
- user's request
- genre
- mood
- count

Every movie should feel intentional.
Do not recommend only the most obvious titles every time.
```

The user's preferences are then inserted into the prompt before it is sent to Gemini.

---

## 📁 Project Structure

```text
.
├── backend/
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   └── my-app/
│       ├── src/
│       │   └── app/
│       ├── public/
│       ├── package.json
│       ├── next.config.ts
│       └── tsconfig.json
│
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure backend environment variables

Create a `.env` file inside the `backend` directory:

```env
GOOGLE_API_KEY=your_google_api_key
```

> Never commit your API keys or `.env` files to GitHub.

### 4. Start the backend

```bash
npm run dev
```

---

### 5. Install frontend dependencies

Open a new terminal:

```bash
cd frontend/my-app
npm install
```

### 6. Configure the frontend

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:YOUR_BACKEND_PORT
```

Replace `YOUR_BACKEND_PORT` with the port used by your Express server.

### 7. Start the frontend

```bash
npm run dev
```

The Next.js application will then be available at:

```text
http://localhost:3000
```

---

## 🌐 Environment Variables

### Backend

| Variable | Description |
|---|---|
| `GOOGLE_API_KEY` | Google Gemini API key |

### Frontend

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL of the backend API |

For production, `NEXT_PUBLIC_API_URL` should point to the deployed backend rather than `localhost`.

---

## 📦 Production Build

### Backend

```bash
npm run build
```

### Frontend

```bash
npm run build
```

The frontend uses Next.js static export for deployment.

---

## 🚀 Deployment

The application is deployed on **Render**.

### Frontend

```text
Root Directory: frontend/my-app
Build Command: npm run build
Publish Directory: out
```

The Next.js configuration uses static export:

```ts
const nextConfig = {
  output: "export",
};

export default nextConfig;
```

### Backend

The Express backend is deployed separately and is consumed by the frontend through the configured API URL.

---

## 🔮 Future Improvements

Some ideas for future versions:

- 🎬 Movie posters and thumbnails
- ⭐ Ratings and reviews
- 🔍 Search for specific movies
- 🎞️ Trailer integration
- 📚 Recommendation history
- ❤️ Save favorite recommendations
- 👤 User accounts
- 🎯 More detailed preference controls
- 🧠 Improved recommendation prompts
- 📱 Enhanced mobile UI

---

## 🎯 What I Learned

This project helped me explore:

- Building an AI-powered application with **LangChain**
- Integrating **Google Gemini** with a Node.js backend
- Designing prompts for consistent AI responses
- Connecting a **Next.js frontend** to an **Express API**
- Managing environment variables
- Deploying a full-stack application
- Deploying a Next.js static application
- Structuring a full-stack TypeScript project

---

## 📸 Demo

### CineMatch AI

Try it yourself:

🔗 https://langchain-movie-recommendation.onrender.com/

---






