const express = require("express");
const router = express.Router();
const sendEmail = require("./sendmail")
const path = require("path");

//MIDDLEWARES
router.use(express.static('../frontend/css'));
router.use(express.static('../frontend/images'));
router.use(express.static('../frontend/js'));


//imported routes
const Movie = require("../mongoose_model/Movie");
const movieUpload = require("../middleware/file-upload");
const {isAcreator} = require("../middleware/auth");


//load the creator page
router.get("/", isAcreator ,(req,res) => {
  res.sendFile(path.join(__dirname,'../frontend/html','filmhubadmin.html'))
});


//get all the movies
router.get("/upload-movie",async (req,res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).send(movies)
   } catch (error) {
    return res.status(404).send(`Error getting all the movies ${error}`)
   }
})

//get all the action movies
router.get("/upload-movie/action",async (req,res) => {
  try {
    const actionMovies = await Movie.find({ genre: "action" });
    return res.status(200).send(actionMovies)
   } catch (error) {
    return res.status(404).send(`Error getting all the movies ${error}`)
    console.log(error);
   }
});

//get all the romance movies
router.get("/upload-movie/romance",async (req,res) => {
  try {
    const romanceMovies = await Movie.find({ genre: "romance" });
    return res.status(200).send(romanceMovies)
   } catch (error) {
    return res.status(404).send(`Error getting all the movies ${error}`)
   }
   
});

//get all the comedy movies
router.get("/upload-movie/comedy",async (req,res) => {
  try {
    const comedyMovies = await Movie.find({ genre: "comedy" });
    return res.status(200).send(comedyMovies)
   } catch (error) {
    return res.status(404).send(`Error getting all the movies ${error}`)
   }
   
});

//get all the animeanimation movies
router.get("/upload-movie/animeanimation",async (req,res) => {
  try {
    const animationMovies = await Movie.find({ genre: "animation" });
    return res.status(200).send(animationMovies)
   } catch (error) {
    return res.status(404).send(`Error getting all the movies ${error}`)
   }
   
});

//get all the horror movies
router.get("/upload-movie/horror",async (req,res) => {
  try {
    const horrorMovies = await Movie.find({ genre: "horror" });
    return res.status(200).send(horrorMovies)
   } catch (error) {
    return res.status(404).send(`Error getting all the movies ${error}`)
   }
   
});




//movie-uploads route
//@desc  /creator/uploads
router.post("/upload-movie", isAcreator,movieUpload.fields([{ name: 'image'}, { name: 'movie'}]), async (req,res) => {

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
        movie: req.files.movie[0].location
});
    
 try{
    //saving a user to DB
        const savedMovie = await movie.save();
        console.log(movie);
        res.redirect('/creator');
    
}catch (error) {
     res.status(404).send(`upload error: ${error}`)
     console.log(error);
     
   }
})





//update a movie
router.put("/upload-movie/:id", async (req,res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id);
    return res.status(200).send(updatedMovie)
   } catch (error) {
    return res.status(404).send(`Error updating movie ${error}`)
   }
   
});




//delete a movie
router.delete("/upload-movie/:id", async (req,res) => {
   try {
    const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).send(' ${deleteMovie} is deleted')
   } catch (error) {
    return res.status(404).send(`Error deleting movie ${error}`)
   }
   
});


//send-email route
//@desc  /api/admin/sendemail
router.post("/send-email",isAcreator, (req,res) => {
  const { subject,text } = req.body
  sendEmail(subject,text,(err,data)=>{
    if (err) {
      res.status(500).send(`There was an error ${err}`)
    } else {
      res.status(200).send("Message sent!!")
    }
  })
});
    

module.exports = router;