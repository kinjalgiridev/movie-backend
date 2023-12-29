const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  // userid: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  title: {
    type: String,
    required: true,
  },
  publishingYear: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
