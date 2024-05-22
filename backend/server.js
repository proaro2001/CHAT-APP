// file imports
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// variables
const app = express(); // create express app
const PORT = process.env.PORT || 3000; // PORT is either the one provided by the environment or 5000

// middleware
dotenv.config(); // load env variables
app.use(express.json()); // parse json data ( from req.body)

app.use("/api/auth", authRoutes);

// listener for the server
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server started on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// root route
app.get("/", (req, res) => {
  // root route
  res.send("Hello World");
});
