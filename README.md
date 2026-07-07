<div align="center">

# 📈 EquiTrade

### A Full-Stack MERN Stock Trading Platform

A modern stock trading platform built using the MERN stack that allows users to securely manage portfolios, place buy orders, track holdings, monitor positions, and visualize investments through an interactive dashboard.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

# 🚀 Overview

EquiTrade is a full-stack stock trading application inspired by modern brokerage platforms. The project focuses on secure authentication, portfolio management, responsive dashboards, and clean backend architecture using the MERN stack.

Users can:

- Create an account
- Log in securely
- Buy stocks
- Track holdings
- Monitor portfolio positions
- View interactive charts
- Manage investments through a responsive dashboard

---

# ✨ Features

## Authentication

- User Signup
- Secure Login
- JWT Authentication
- Protected Routes
- Password Hashing using bcrypt
- Cookie & Bearer Token Support

---

## Portfolio Management

- Buy Stocks
- Holdings Dashboard
- Portfolio Positions
- Orders Page
- Funds Overview
- Watchlist Interface
- Portfolio Summary

---

## Dashboard

- Interactive Charts
- Portfolio Analytics
- Holdings Overview
- Responsive Design

---

## Security

- JWT Authentication
- Route Protection Middleware
- Encrypted Password Storage
- Secure API Access

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- Axios
- Chart.js
- React ChartJS 2
- Material UI
- CSS

## Backend

- Node.js
- Express.js
- JWT
- bcryptjs
- Cookie Parser

## Database

- MongoDB
- Mongoose

---

# 📊 Project Statistics

| Metric | Count |
|---------|------:|
| REST API Endpoints | 6 |
| React Components | 44 |
| Top-level Pages | 8 |
| Dashboard Pages | 6 |
| Backend Controllers | 2 |
| Middleware Modules | 2 |
| MongoDB Models | 4 |
| Frontend JavaScript | 2,700+ LOC |
| Backend JavaScript | 620+ LOC |

---

# 📂 Project Structure

```
EquiTrade
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── dashboard/
│   └── context/
│
├── backend/
│   ├── Controllers/
│   ├── Middleware/
│   ├── Models/
│   ├── Routes/
│   └── index.js
│
└── README.md
```

---

# 🔌 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/signup | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/verify | Verify JWT |
| POST | /api/auth/buy | Buy Stock |
| GET | /allHoldings | Fetch Holdings |
| GET | /allPositions | Fetch Positions |

---

# 🔒 Authentication Flow

- User registers with encrypted password
- JWT generated after successful login
- Token stored securely
- Protected routes validate JWT
- Authenticated users can access dashboard features

---

# 📸 Screenshots

### Landing Page

> <img width="1894" height="946" alt="Screenshot 2026-05-28 100936" src="https://github.com/user-attachments/assets/2ca9864d-559a-4c39-8a21-9c7d2f5d1294" />

---

### Dashboard

> <img width="1919" height="947" alt="Screenshot 2026-05-28 101056" src="https://github.com/user-attachments/assets/e81500e8-11a8-433e-8e62-e1dfb8a3c23a" />

---

### Holdings

> <img width="944" height="530" alt="image" src="https://github.com/user-attachments/assets/99099c88-e244-4b32-9ebe-fe426e773356" />


---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/anjali-014/equitrade-fintech-app.git
```

```
cd equitrade-fintech-app
```

---

## Install Frontend

```bash
cd frontend
npm install
```

---

## Install Backend

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
```

---

## Start Backend

```bash
npm run dev
```

---

## Start Frontend

```bash
npm start
```

---

# 🎯 What I Learned

Building EquiTrade helped me gain hands-on experience with:

- Designing RESTful APIs
- JWT Authentication
- MongoDB Data Modeling
- Backend Architecture
- React State Management
- API Integration
- Route Protection
- Dashboard Design
- Authentication Middleware
- Full-Stack Project Structure

---

# 🔮 Future Improvements

- Sell Stock Functionality
- Live Stock Market Data
- Real-time Price Updates
- Portfolio Performance Analytics
- Transaction History
- Dark Mode
- Unit & Integration Testing
- Docker Deployment

---

# 👩‍💻 Author

**Anjali Saini**

Electronics & Communication Engineering  
National Institute of Technology Patna

GitHub: https://github.com/anjali-014

LinkedIn: https://linkedin.com/in/anjalisaini-nitp


---

## ⭐ If you found this project interesting, consider giving it a star!
