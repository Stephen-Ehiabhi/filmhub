//Installed Modules
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookie = require("cookie-parser");
const cors = require("cors");
const path = require("path");

//load config
dotenv.config({
  path: "./config/config.env",
});

const PORT = process.env.PORT || 8000;
const Onproduction = process.env.productionURI
const onDevelopment = process.env.developmentURI


//calling express...
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

//middlewares
app.use(cors());
app.use(cookie());
app.use(express.static("./frontend/css"));
app.use(express.static("./frontend/images"));
app.use(express.static("./frontend/js"));

//connect to db
mongoose.connect(
  Onproduction,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(`Server error : ${err}`);
    } else {
      app.listen(PORT, () => {
        console.log(
          `Server is up, and connected to filmhub on port ${process.env.PORT}`
        );
      });
    }
  }
);

//Import Routes
const webRoutes = require("./routes/page");
const authRoute = require("./routes/user");
const creatorActionsRoute = require("./routes/creatorActions");
const fileUpload = require("./middleware/file-upload");
const { isNotLoggedIn } = require("./middleware/auth");

//Route Middlewares
app.use("/user", isNotLoggedIn, authRoute);
app.use("/creator", creatorActionsRoute);
app.use("/", webRoutes);
