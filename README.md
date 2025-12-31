# 🗂️ Task Manager – MERN Stack Application

A full-stack **Task Management Web Application** built using the **MERN Stack**.  
This project allows users to create, manage, update, and track tasks efficiently with authentication support.

---

## 🚀 Features

- User Authentication (Login / Register)
- Create, Update, Delete Tasks
- Task Priority Management (Low / Medium / High)
- Task Status Tracking (Pending / In Progress / Completed)
- Secure APIs using JWT Authentication
- MongoDB Atlas for cloud database
- Responsive UI using React & Tailwind CSS
- Separate Frontend & Backend structure (Production-ready)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js

---

## 📁 Project Structure

```text
task-manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── node_modules/
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── modals/
│       │   ├── navbar/
│       │   └── tasks/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       └── utils/
│
├── .gitignore
└── README.md


---
```
## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:
```
PORT=5000
MONGO_URI=mongodb+srv://saurabhdwivedi2003sta_db_user:LzX76J7hwTYzYONg@saurabh1.qms2uf6.mongodb.net/
JWT_SECRET=supersecretkey

---
```

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```
###2️⃣ Backend Setup
cd backend
npm install
npm run dev

Server will start at:
```
http://localhost:5000
```

###3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run at:
```
http://localhost:5173
```

🌐 MongoDB Atlas

This project uses MongoDB Atlas (Cloud Database) instead of local MongoDB.

Steps:
Create a MongoDB Atlas account
Create a Cluster
Get connection string
Paste it in .env file as MONGO_URI

🔐 Authentication Flow

1.User registers/logs in

2.JWT token generated on backend

3.Token stored on frontend

4.Protected routes accessed using token

5.Tasks are user-specific


🚀 Deployment (Planned / Supported)

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

Project structure is fully compatible with production deployment.

👨‍💻 Author

Saurabh Dwivedi

Full Stack Developer (MERN)

GitHub: https://github.com/saurabh19062003dwivedi






