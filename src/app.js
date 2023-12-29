require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const app = express();
const jsonParser = bodyParser.json();
mongoose.connect(`${process.env.MONGODB_URI}`);

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/movie", jsonParser, movieRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
