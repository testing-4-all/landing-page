# QA Dom

## Install Dependencies

Run the following command to install all dependencies for both **backend** (Strapi) and **frontend**:

```bash
# Install backend dependencies
cd backend
npm install

# Go back to the root and install frontend dependencies
cd ..
npm install
```

---

## Start the Project

Run the following command to start both **backend** (Strapi) and **frontend**:

```bash
# Start the backend (Strapi)
cd backend
npm start 

# Start the frontend
cd ..
npm start
```

This will start **Strapi** on `http://localhost:1337` and the frontend on `http://localhost:3000`.

---


## Environment Variables

Make sure you have the correct `.env` files set up for both backend and frontend:

**Backend (`backend/.env`):**
```env
Follow env.example file
```

**Frontend (`.env.local`):**
```env
Follow env.example file
```

---


