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
### 2️⃣ Backend Setup
cd backend
npm install
npm run dev

Server will start at:
```
http://localhost:5000
```

### 3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

 2 test users

All test accounts use the password respectively

saurabhdwivedi2003sta@gmail.com 
pass- 123456

test@gmail.com
pass-123




Frontend will run at:
```
http://localhost:5173
```

## 🌐 MongoDB Atlas

This project uses **MongoDB Atlas (Cloud Database)** instead of local MongoDB.

### Setup Steps
1. Create a MongoDB Atlas account  
2. Create a cluster  
3. Copy the connection string  
4. Paste it into the `.env` file as:



---

## 🔐 Authentication Flow

1. User registers or logs in  
2. JWT token is generated on the backend  
3. Token is stored on the frontend  
4. Protected routes are accessed using the token  
5. Tasks are user-specific and linked to the logged-in user  

---

## 🔗 API Endpoints

### 🔑 Authentication
- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – Login user  

---

### 🗂️ Tasks
- `GET /api/tasks` – Get all tasks (with pagination)  
- `GET /api/tasks/:id` – Get a single task  
- `POST /api/tasks` – Create a new task  
- `PUT /api/tasks/:id` – Update an existing task  
- `DELETE /api/tasks/:id` – Delete a task  

---

## 🚀 Deployment (Planned / Supported)

- **Frontend:** Vercel  
- **Backend:** Render  
- **Database:** MongoDB Atlas  

The project structure is fully compatible with **production deployment**.


## 👨‍💻 Author

**Saurabh Dwivedi**  
Full Stack Developer (MERN)  
GitHub: https://github.com/saurabh19062003dwivedi












