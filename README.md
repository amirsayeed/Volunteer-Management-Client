# Volunteer Management - Client

## Purpose

A responsive volunteer management platform built with React, Firebase, and MongoDB. Users can create, update, and delete volunteer posts or sign up to volunteer for others' posts. Implements JWT authentication, dark/light theme, and dynamic routing.

## Live Demo

[View Live Site](https://volunteer-management-a44f1.web.app/)<br/>
[Server GitHub Repo](https://github.com/amirsayeed/Volunteer-Management-Server)

## Key Features

- **User Authentication**: Email/password + Google login with Firebase & JWT.
- **CRUD Operations**: Create, read, update, delete volunteer posts.
- **Dynamic UI**: Dark/light theme toggle, responsive design (mobile/desktop).
- **Animations**: Framer Motion for interactive elements.
- **Search & Sort**: Filter posts by title, sort by deadline.
- **Protected Routes**: JWT verification for private pages.

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, DaisyUI
- **Auth**: Firebase Authentication, JWT
- **State Management**: React Context API
- **Animation**: Framer Motion
- **HTTP Client**: Axios
- **Notifications**: React Toastify, SweetAlert2

## NPM Packages

- **Axios**
- **Framer Motion**
- **React Toastify**
- **SweetAlert2**
- **React Icons**
- **React Datepicker**
- **React CountUp**

## 🛠️ Local Development Setup

### 1. Clone both client and server repos:

```bash
git clone https://github.com/amirsayeed/Volunteer-Management-Client.git
git clone https://github.com/amirsayeed/Volunteer-Management-Server.git
```

### 2. Setup the server

```bash
cd Volunteer-Management-Server
npm install
```

Create a .env file in the server root with the following:

```bash
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
```

Then start the server using:

```bash
nodemon index.js
```

The server will run on: http://localhost:5000

### 3. Setup the Client:

```bash
cd ../Volunteer-Management-Client
npm install
```

Create a .env.local file in the root of the client directory:

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Then start the client:

```bash
npm run dev
```

The client will run at: http://localhost:5173
