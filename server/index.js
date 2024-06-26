import express from "express";
import mongoose from "mongoose";

const app = express();

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
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
