const express = require("express");
const multer = require("multer");
const {
  createMovie,
  editMovie,
  getAllMovies,
  getMovieById,
} = require("../controllers/movieController");
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/movies", upload.single("poster"), createMovie);
router.get("/getall", getAllMovies);
router.patch("/movies/:id", upload.single("poster"), editMovie);
router.get("/movies/:movieId", getMovieById);

module.exports = router;
