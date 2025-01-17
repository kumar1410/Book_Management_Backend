import express from "express";
import bodyParser from "body-parser";
import router from "./src/routes/bookRoutes.js";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";
import dotenv from "dotenv";


dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);
app.use("/api", userRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
