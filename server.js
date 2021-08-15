//Installed Modules
const express = require("express");
const mongoose = require("mongoose");
const cookie = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const { PORT, productionURI } = require("./config.js");

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
  productionURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  (err) => {
    if (err) {
      console.log(`Server error : ${err}`);
    } else {
      app.listen(PORT, () => {
        console.log(`Server is up, and connected to filmhub on port ${PORT}`);
      });
    }
  }
);

//Import Routes
const webRoutes = require("./routes/page");
const authRoute = require("./routes/user");
const admin = require("./routes/admin");
const fileUpload = require("./middleware/file-upload");
const { isNotLoggedIn } = require("./middleware/auth");

//Route Middlewares
app.use("/user", isNotLoggedIn, authRoute);
app.use("/admin", admin);
app.use("/", webRoutes);
