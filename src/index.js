const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(8000, () => {
  console.log("Server is running on 8000");
});

