
# 🌐 MERN Stack User Management Application w/ Docker (Compose)  🐋

> **A modern, secure, and responsive user management dockerized dashboard built with the MERN stack and Material UI.**

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?logo=mongodb&logoColor=white&color=1e40af)
![React](https://img.shields.io/badge/React-v18-green?logo=react&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-%231976D2?logo=mui&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%2368A063?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248?logo=mongodb&logoColor=white)

---

## ✨ Features

This full-stack application provides a clean and intuitive interface for managing users, with role-based access control and JWT-powered authentication.

✅ **Secure Authentication**  
- Users can sign up and log in using **JWT tokens** for secure session management.

🔐 **Admin Dashboard**  
- Admins can **add, edit, and delete** user accounts from a centralized, responsive dashboard.

🎨 **Modern UI with Material UI**  
- Built with **Material UI** for a sleek, consistent, and mobile-friendly design across all devices.

🛡️ **Role-Based Access**  
- Different permissions for regular users and admins — only authorized users can manage accounts.

💾 **MongoDB & Mongoose**  
- Data stored in a scalable NoSQL database with robust schema modeling.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/mattveeye/MERN-Stack-User-Management-Application

cd MERN-Stack-User-Management-Application
```

### 2. Install Dependencies

Install dependencies for both server and client:

```bash
# Backend (Node.js / Express)
cd server
npm install

# Frontend (React / Material UI)
cd ../client
npm install

```



### 3. Environment Variables

#### 3.2.1. Create a `.env` file in the `server` directory:

```env
# Server Port
PORT=5000

# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/<db_name>

# JWT Secret Key
ACCESS_TOKEN=<your_strong_secret_key_here>
```

> 🔐 Replace `<db_name>` with your actual MongoDB credentials.  

> Use a strong secret key for `ACCESS_TOKEN` 

### Create /server/docker_env/ directory.
#### 3.2.2. Create a `.env` file in the `server/docker_env/` directory:
> You must repeat .env from the server directory BUT change MONGO_URI.
```env
# .env from the server directory BUT new MONGO_URI. 
# put ***mongo*** instead of localhost)

# Server Port
PORT=5000 

# MongoDB Connection String
MONGO_URI=mongodb://mongo:27017/<db_name>

# JWT Secret Key
ACCESS_TOKEN=<your_strong_secret_key_here>
```
> 🔐 Replace `<db_name>` with your actual MongoDB credentials.  

> Use a strong secret key for `ACCESS_TOKEN` 



#### 3.2.3. Create a `.env` file in the `client` directory:
```env
REACT_APP_API_URL=http://localhost:5000
```
<h1> You can choose any way to run the app</h1>

### 4.1. First way to run the app (Default)

Start both the server and client:

```bash
# Terminal 1: Start the backend server
cd server
node server.js
```

```bash
# Terminal 2: Start the frontend development server
cd client
npm start
```

```bash
# Terminal 3: Do not forget to run your local MongoDB
```

---

### 4.2. Second way. Run with Docker 🐳

This project can be easily run using Docker and Docker Compose. This method handles all dependencies and sets up the server and client in a single command.

1.  **Ensure Docker is installed:** Make sure you have Docker and Docker Compose installed on your system.

2.  **Build and run the containers:** From the root directory of the project, run the following command. This will build the images and start the containers for both the client and server.

    ```bash
    docker-compose up --build
    ```

3.  **Access the application:** The client will be available at `http://localhost:3000` and the server will be running on `http://localhost:5000`.



## 🛠️ Built With

### 🎨 Frontend
- **React** – Dynamic UI with component-based architecture
- **Material UI (MUI)** – Responsive design and pre-styled components
- **React Router** – Client-side navigation

### ⚙️ Backend
- **Node.js** – JavaScript runtime
- **Express** – Lightweight web server framework
- **Mongoose** – ODM for MongoDB
- **bcryptjs** – Secure password hashing
- **jsonwebtoken (JWT)** – Stateless authentication
- **dotenv** – Environment variable management

### 🗄️ Database
- **MongoDB** – Cloud-hosted NoSQL database

### 🐳 Infrastructure & DevOps 

- **Docker & Docker Compose**  – Full containerization for seamless development, dependency management, and consistent deployment across environments.
     
