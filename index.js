import app from "./app.js";
import { connectToDB } from "./src/database/dataSource.js";

const PORT =  5000;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during initialization:", err.message);
    process.exit(1); // Exit the process on failure
  });