const authenticateToken = require("../middleware/authMiddleware");
const Movie = require("../models/movie");
const User = require("../models/user");
const createMovie = async (req, res) => {
  console.log("req.body",body)
  authenticateToken(req, res, async () => {
    const email = req.user.email;
    const user = await User.find({ email });
    console.log(user);
    const { title, publishingYear } = req.body;
    const poster = req.file.buffer.toString("base64");

    try {
      const newMovie = new Movie({ title, publishingYear, poster });
      await newMovie.save();

      res.json({ success: true, message: "Movie created successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  });
};
const getAllMovies = async (req, res) => {
  authenticateToken(req, res, async () => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;

    try {
      const totalMovies = await Movie.countDocuments();

      const movies = await Movie.find()
        .skip((page - 1) * limit)
        .limit(limit);

      res.status(200).json({
        movies,
        totalMovies,
        totalPages: Math.ceil(totalMovies / limit),
        currentPage: page,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
};
const editMovie = async (req, res) => {
  authenticateToken(req, res, async () => {
    const { id } = req.params;
    const { userid, title, publishingYear } = req.body;

    try {
      const movie = await Movie.findById(id);

      if (!movie) {
        return res
          .status(404)
          .json({ success: false, message: "Movie not found" });
      }

      movie.userid = userid || movie.userid;
      movie.title = title || movie.title;
      movie.publishingYear = publishingYear || movie.publishingYear;
      movie.poster = req.file?.buffer.toString("base64") || movie.poster;

      await movie.save();

      res.json({ success: true, message: "Movie updated successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  });
};
const getMovieById = async (req, res) => {
  authenticateToken(req, res, async () => {
    const { movieId } = req.params;
    try {
      const movie = await Movie.findById(movieId);

      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }

      res.status(200).json(movie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
};

module.exports = {
  createMovie,
  editMovie,
  getAllMovies,
  getMovieById,
};
