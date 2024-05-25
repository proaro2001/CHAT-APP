// file imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

// variables
const app = express(); // create express app
const PORT = process.env.PORT || 5100; // PORT is either the one provided by the environment or 5000

// middleware
dotenv.config(); // load env variables
app.use(express.json()); // parse json data ( from req.body)
app.use(cookieParser()); // parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

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
