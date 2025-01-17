import http from "http";
import { connectToDB } from "./src/database/dataSource.js";

const PORT = process.env.PORT || 5000;

// Define the request handler
const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to my simple Node.js app!");
};

// Use an IIFE for initialization
(async () => {
  try {
    await connectToDB();
    console.log("Database connected!");

    const server = http.createServer(requestHandler);

    // Ensure listen is called only once
    server.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error during initialization:", error.message);
    process.exit(1); // Exit the process to prevent lingering issues
  }
})();
