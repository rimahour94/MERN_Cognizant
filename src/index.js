const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config()

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.get("/", (_, res) => {
  res.send("Server is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
