import express  from "express";
import mongoose from "mongoose";
import personRoutes from "./routes/person.routes.js";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/person", personRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));

export default app;