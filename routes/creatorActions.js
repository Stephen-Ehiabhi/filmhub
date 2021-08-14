const express = require("express");
const router = express.Router();
// const jsonEmail = require("./jsonmail");
const path = require("path");

//MIDDLEWARES
router.use(express.static("../frontend/css"));
router.use(express.static("../frontend/images"));
router.use(express.static("../frontend/js"));

//imported routes
const Movie = require("../mongoose_model/Movie");
const movieUpload = require("../middleware/file-upload");
const { isAcreator } = require("../middleware/auth");

//load the creator page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html", "Filmhubadmin.html"));
});

//get all the movies
router.get("/upload-movie", async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(404).json(`Error getting all the movies ${error}`);
  }
});

//get all the action movies
router.get("/upload-movie/action", async (req, res) => {
  try {
    const actionMovies = await Movie.find({ genre: "action" });
    return res.status(200).json(actionMovies);
  } catch (error) {
    return res.status(404).json(`Error getting all the movies ${error}`);
    console.log(error);
  }
});

//get all the romance movies
router.get("/upload-movie/romance", async (req, res) => {
  try {
    const romanceMovies = await Movie.find({ genre: "romance" });
    return res.status(200).json(romanceMovies);
  } catch (error) {
    return res.status(404).json(`Error getting all the movies ${error}`);
  }
});

//get all the comedy movies
router.get("/upload-movie/comedy", async (req, res) => {
  try {
    const comedyMovies = await Movie.find({ genre: "comedy" });
    return res.status(200).json(comedyMovies);
  } catch (error) {
    return res.status(404).json(`Error getting all the movies ${error}`);
  }
});

//get all the animeanimation movies
router.get("/upload-movie/animeanimation", async (req, res) => {
  try {
    const animationMovies = await Movie.find({ genre: "animation" });
    return res.status(200).json(animationMovies);
  } catch (error) {
    return res.status(404).json(`Error getting all the movies ${error}`);
  }
});

//get all the horror movies
router.get("/upload-movie/horror", async (req, res) => {
  try {
    const horrorMovies = await Movie.find({ genre: "horror" });
    return res.status(200).json(horrorMovies);
  } catch (error) {
    return res.status(404).json(`Error getting all the movies ${error}`);
  }
});

//movie-uploads route
//@desc  /creator/uploads
router.post(
  "/upload-movie",

  movieUpload.fields([{ name: "image" }, { name: "movie" }]),
  async (req, res) => {
    const movie = new Movie({
      title: req.body.title,
      summary: req.body.summary,
      genre: req.body.genre,
      writers: req.body.writers,
      length: req.body.length,
      summary: req.body.summary,
      year: req.body.year,
      actors: req.body.actors,
      thriller: req.body.thriller,
      image: req.files.image[0].location,
      movie: req.files.movie[0].location,
    });

    try {
      //saving a user to DB
      const savedMovie = await movie.save();
      console.log(movie);
      res.redirect("/creator");
    } catch (error) {
      res.status(404).json({ error: `upload error: ${error}` });
      console.log(error);
    }
  }
);

//update a movie
router.put("/upload-movie/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id);
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(404).json({ error: `Error updating movie ${error}` });
  }
});

//delete a movie
router.delete("/upload-movie/:id", async (req, res) => {
  try {
    const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: ` ${deleteMovie} is deleted` });
  } catch (error) {
    return res.status(404).json({ error: `Error deleting movie ${error}` });
  }
});

//json-email route
//@desc  /api/admin/jsonemail
router.post("/json-email", (req, res) => {
  const { mail } = req.body;
  jsonEmail(mail, text, (err, data) => {
    if (err) {
      res.status(404).json({ error: `There was an error ${err}` });
    } else {
      res.status(200).json({ success: "Message sent!!" });
    }
  });
});

module.exports = router;
