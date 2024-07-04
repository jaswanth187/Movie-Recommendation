import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";

const app = express();
app.use(express.json());

// Enable CORS with credentials
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend domain
    credentials: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://chjaswanthiit:i34HyQ1bz1Vgx9UN@auth-mern.o7zvxdo.mongodb.net/?retryWrites=true&w=majority&appName=auth-mern"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

app.use("/", authRoutes);
app.use("/users", userRoutes);

// Middleware to handle errors
app.use((err, req, res, next) => {
  // Include req parameter
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
