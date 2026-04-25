const mongoose = require("mongoose");
let db;
const generateConnection = async (url) => {
  try {
    const dbRes = await mongoose.connect(url);
    console.log("Database connected successfully", dbRes.connection.name);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  generateConnection,
};
