# 🎉 Event Booking API

A full-featured backend API built with **Node.js**, **Express**, and **MongoDB** that handles:

- User authentication and authorization
- Event creation, update, and deletion
- Booking and managing event reservations

---

## 📌 Features

### 🔐 Authentication
- Register and log in users
- Secure password hashing using `bcrypt`
- Token-based authentication with JWT

### 📅 Event Management
- Create, read, update, delete (CRUD) events
- Store event details like title, description, date, location, and capacity

### 🎫 Booking System
- Book users into events
- Prevent overbooking by checking event capacity
- Track booking history

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime
- **Express** – Server framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ORM
- **JWT** – Token-based authentication
- **bcryptjs** – Secure password hashing
- **dotenv** – Environment variable management

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/event-booking-app.git
cd event-booking-app
npm install
