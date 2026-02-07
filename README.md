# 🏥 Hospital Management System - Backend

A robust RESTful API built with **Node.js**, **Express**, and **MySQL**
to power a comprehensive hospital management dashboard. This server
handles secure administrative operations, staff records management, and
relational data persistence using **Sequelize ORM**.

------------------------------------------------------------------------

## 📋 Table of Contents

-   [✨ Features](#-features)
-   [🛠️ Tech Stack](#️-tech-stack)
-   [📁 File Structure](#-file-structure)
-   [🚀 Installation](#-installation)
-   [⚙️ Configuration](#️-configuration)
-   [🌐 API Endpoints](#-api-endpoints)
-   [🔒 Security](#-security)

------------------------------------------------------------------------

## ✨ Features

  -----------------------------------------------------------------------
  Feature                             Description
  ----------------------------------- -----------------------------------
  🔑 **Secure Authentication**        Admin login with JWT token
                                      generation and validation.

  🗄️ **Relational Database**          Managed with **MySQL** and
                                      **Sequelize** for structured staff
                                      and hospital data.

  👨‍⚕️ **Staff Management**             Complete CRUD functionality for
                                      consultants and nursing staff.

  📈 **Server-side Pagination**       Optimized data fetching to handle
                                      large datasets efficiently.

  🛡️ **CORS Protection**              Configured to allow secure
                                      communication with the React
                                      frontend.

  📜 **SQL Export**                   Includes `hospital.sql` for quick
                                      database schema replication.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Runtime Environment:** Node.js 🟢
-   **Web Framework:** Express.js 🚀
-   **Database:** MySQL 🐬
-   **ORM:** Sequelize 🏗️
-   **Authentication:** JWT & Bcrypt 🔐
-   **Environment Management:** dotenv ⚙️

------------------------------------------------------------------------

## 📁 File Structure

``` text
hospital-backend/
├── 📂 src/
│   ├── 📂 config/          
│   ├── 📂 controllers/     
│   ├── 📂 middleware/      
│   ├── 📂 models/          
│   ├── 📂 routes/          
│   ├── 📂 utils/           
│   └── server.js           
├── .env                    
├── .gitignore              
├── hospital.sql            
├── package.json            
└── hospital-checklist.md   
```

------------------------------------------------------------------------

## 🚀 Installation

### 1️⃣ Clone the Repository

``` bash
git clone https://github.com/EslamOmar5012/hospital-backEnd-.git
cd hospital-backEnd-
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Database Setup

-   Create a MySQL database named **hospital**.
-   Import the provided **hospital.sql** file.

### 4️⃣ Environment Setup

Create a `.env` file:

    PORT=3000
    DB_NAME=hospital
    DB_USER=root
    DB_PASSWORD=your_mysql_password
    DB_HOST=127.0.0.1
    JWT_SECRET=your_super_secret_key
    JWT_EXPIRES_IN=90d

### 5️⃣ Start the Server

``` bash
npm run dev   # Development
npm start     # Production
```

Server runs at: 👉 **http://127.0.0.1:3000**

------------------------------------------------------------------------

## 🌐 API Endpoints

### 🔐 Auth

-   **POST /auth/admin/login** → Authenticate admin

### 👨‍⚕️ Consultants

-   **GET /consultants**
-   **POST /consultants**
-   **DELETE /consultants/:id**

### 👩‍⚕️ Nurses

-   **GET /nurses**
-   **POST /nurses**
-   **DELETE /nurses/:id**

------------------------------------------------------------------------

## 🔒 Security

-   **JWT Protection** for private routes\
-   **Foreign Key Constraints** ensure relational integrity\
-   **Environment Variables** protect sensitive credentials

------------------------------------------------------------------------

## 👨‍💻 Author

**Eslam Omar**

⭐ *If this project helped you, please give it a star!*
