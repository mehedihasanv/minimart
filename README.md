

# 🛒 MiniMart

A modern eCommerce web application built with **Next.js (App Router)**, **NextAuth.js**, and **MongoDB**. Features include product browsing, authentication, and protected admin pages.

---

## 🌐 Live Demo

[minimart-jqci.vercel.app](https://minimart-jqci.vercel.app)

---

## ✨ Features

- 🔐 Authentication with Google OAuth & Credentials (NextAuth.js)
- 🛍️ Browse and search products
- 📦 Add, view, and delete products
- 🔒 Protected pages (Add Product, Manage Products)
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS

---

## 🗂️ Route Summary

| Route | Description | Protected |
|-------|-------------|-----------|
| `/` | Landing page with all sections | 
| `/items` | Product list with search | 
| `/items/[id]` | Product details page | 
| `/login` | Login with Google or credentials | 
| `/register` | Register with credentials | 
| `/add-product` | Add a new product | 
| `/manage-products` | View and delete products | 
| `/about` | About page | 
| `/contact` | Contact page | 

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Authentication:** NextAuth.js
- **Database:** MongoDB Atlas
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## ⚙️ Setup & Installation

### 1. Clone the repository

\```bash
git clone https://github.com/mehedihasanv/minimart.git
cd minimart
\```

### 2. Install dependencies

\```bash
npm install
\```

### 3. Create `.env.local` file

\```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
\```

### 4. Run the development server

\```bash
npm run dev
\```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret |
| `NEXTAUTH_SECRET` | Random secret for NextAuth |
| `NEXTAUTH_URL` | Base URL of your app |
| `MONGODB_URI` | MongoDB connection string |

---

## 📦 Deployment (Vercel)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add all environment variables in Vercel Dashboard
4. Set `NEXTAUTH_URL` to your Vercel URL
5. Deploy!

---

## 👤 Author

**Mehedi Hasan**
- GitHub: [github.com/mehedihasanv](https://github.com/mehedihasanv)
- LinkedIn: [linkedin.com/in/mehedi-hasan-3a36233b4](https://www.linkedin.com/in/mehedi-hasan-3a36233b4)

---

© 2026 MiniMart. All rights reserved.