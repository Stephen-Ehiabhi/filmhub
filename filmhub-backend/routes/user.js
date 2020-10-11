const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require("path");
const bcrypt = require('bcryptjs');

//MIDDLEWARES
router.use(express.static('./frontend/css'));

//IMPORTED ROUTE
const User = require("../mongoose_model/User");



//get routes to load pages
router.get("/register", (req,res) => {
  res.sendFile(path.join(__dirname,'../frontend/html','register.html'))
});
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/html', 'signin.html'))
});


//registration route
//@desc url /api/user/register
router.post("/register", async (req, res) => {
 
//validate the input
const { firstname,lastname,username,email,password,password2,country } = req.body;
let errors = []

//check empty fields
if( !firstname || !lastname || !username || !email || !password || !country ){
  errors.push({ msg: "Please fill in all fields" })
}

//check password is at least 6 digits long
if(password.length < 6){
   errors.push({ msg: "Password should be at least 6 characters" });
}
if(username.length < 4){
  errors.push({ msg: "Username should be at least 4 characters" });
}
if(!email.includes('@')){
  errors.push({ msg: "Email is invalid" });
}
if(password !== password2){
  errors.push({ msg: "Passwords aren't the same" });
}
if(errors.length > 0){
  res.send({
    errors
  })
}else{

//check if user already exists
  const emailExist = await User.findOne({ email });
  if(emailExist) return res.status(404).send("email already exists");

//hash password
 const salt = await bcrypt.genSalt(12);
 const encryptedPassword = await bcrypt.hash(req.body.password, salt);

//creating a user
  const user = new User({
  firstname: req.body.firstname,
  lastname: req.body.lastname,
  username: req.body.username,
  email: req.body.email,
  country: req.body.country,
  gender: req.body.gender,
  password: encryptedPassword,
  password2: req.body.password2,
  role: req.body.role
});
try{
//saving a user to DB
  const savedUser = await user.save();
}catch(err){
  res.status(500).json('Upload error: ${err}');
}
}
});




//login route
//@desc url /api/user/register
router.post("/login", async (req,res)=>{

const { email,password } = req.body;

try {
   //check if user exists
  const user = await User.findOne({email});
  if(!user) return res.status(404).send("Incorrect password or Email");

  //check password correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);
  if(!passwordIsCorrect)  return res.status(404).send("Incorrect password or Email");

  const maxAge = 3 * 24 * 60 * 60;

  //create a jwt token
  const token = jwt.sign({id: user._id, role: user.role},process.env.TOKEN_SECRET,{ expiresIn: maxAge})

  //pass it to a cookie
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 } )

  res.redirect('/')

} catch (err) {
  res.json({
    err
  })
}
});

// router.post('logout',(req,res)=>{
//   res.clearCookie('jwt');
//   res.redirect('/api/user/login')
// })

module.exports = router;