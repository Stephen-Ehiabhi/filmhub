const path = require("path");
const express = require("express");
const router = express.Router();

const Movie = require("../mongoose_model/Movie");

//middlewares
router.use(express.static("../frontend/css"));
router.use(express.static("../frontend/images"));
router.use(express.static("../frontend/js"));

//import routes
//const verify = require("./verifyToken");
const { isLoggedIn } = require("../middleware/auth");

//Home Route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "index.html"));
});

router.get("/information", (req, res) => {
  res.json({
    message: "Welcome to the Filmhub API",
    author: "Stephen_Ehinomen_Ehiabhi",
    year_of_creation: "2020",
  });
});

//download Rout
router.get("/api/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    return res.status(200).json({ success: movie });
  } catch (error) {
    return res.status(404).json({ error: "Movie not found" });
  }
});

//get a single movie
router.get("/movie", isLoggedIn, async (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "imgdesc.html"));
});

//search Route
router.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "search.html"));
});

//search Route
router.get("/search/:title", async (req, res) => {
  try {
    const searchedMovie = await Movie.findOne(req.params.title);
    return res.status(200).json(searchedMovie);
  } catch (error) {
       res.status(404).json({ error:error });
  }
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "contact.html"));
});

router.get("/recentlyadded", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "recentlyadd.html"));
});

router.get("/horror", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "horror.html"));
});
router.get("/tv-series", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "tv-series.html"));
});
router.get("/mostpopular", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "mostpopular.html"));
});

router.get("/animeandanimation", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "animeanimation.html"));
});

router.get("/romance", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "romance.html"));
});

router.get("/comedy", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "comedy.html"));
});

router.get("/action", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "action.html"));
});

module.exports = router;
