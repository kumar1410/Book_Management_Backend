import app from "./app.js";
import { connectToDB } from "./src/database/dataSource.js";

const PORT = process.env.PORT || 5000;

const server = connectToDB()
  .then(() => {
    return app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during initialization:", err.message);
    process.exit(1); // Exit the process on failure
  });

export default server;