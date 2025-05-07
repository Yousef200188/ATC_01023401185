require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

const url = process.env.MONGO_URL || "mongodb://localhost:27017/authDB";
const port = process.env.PORT || 4000;
async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log('Mongoose connected correctly');
  } catch (error) {
    console.error('Error connecting to Mongoose:', error);
  }
}
// connectDB();

app.listen(port,()=>{
    console.log('server connected successflly at port:4000');
  });
