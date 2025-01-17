import http from 'http';
// import app from "./app.js";
import { connectToDB } from "./src/database/dataSource.js";

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Write some text to the response
  res.end('Welcome to my simple Node.js app!');
});

connectToDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during initialization:", err.message);
    process.exit(1); // Exit the process on failure
  });

export default server;