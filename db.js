const mongoose = require("mongoose");
require("dotenv").config();
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI, clientOptions);
    console.log("Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
  try {
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {}


}

module.exports = { connect };
