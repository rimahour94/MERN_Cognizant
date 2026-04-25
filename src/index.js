const express = require("express");
const dotenv = require("dotenv");

const { generateConnection } = require("./database/connect");
const route = require("./routes/index.route");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017";
const DB_NAME = process.env.DB_NAME || "my_app";
generateConnection(`${DB_URL}/${DB_NAME}`);

app.use(express.json());
app.use("/", route);

app.get("/", (_, res) => {
  res.send("Server is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
