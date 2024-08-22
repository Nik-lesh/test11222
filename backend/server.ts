import express from "express";
import connectDB from "./movies/db/databaseConnect";
import dotenv from "dotenv";
import route from "./movies/routes/routes";
import routeRestraunt from "./restraunts/routes/routes";
dotenv.config();
const app = express();
const port = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/details", route);
app.use("/restraunts", routeRestraunt);

app.listen(port, () => [console.log(`Server running on port ${port}`)]);
