// file imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

// routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5100; // PORT is either the one provided by the environment or 5000

// for deployment
const __dirname = path.resolve(); //

// middleware
dotenv.config(); // load env variables

app.use(express.json()); // parse json data ( from req.body)
app.use(cookieParser()); // parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// listener for the server
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server started on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// root route
app.get("/", (req, res) => {
  // root route
  res.send("Hello World");
});
