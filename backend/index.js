import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: "./src/.env" });

connectDB()
  .then(() => {
    const port = process.env.PORT || 3005;

    app.listen(port, () => {
      console.log(`Server is started on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed!", error);
  });
