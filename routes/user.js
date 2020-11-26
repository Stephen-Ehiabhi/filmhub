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

const handleErrors = (err) => {
   console.log(err.message, err.code)
   let errors = { email: '', password: ''};

//dupl error code
if (err.code === 11000) {
  errors.email = 'Email already registered';
  return errors;
}

   //val errors
   if(err.message.includes('User validation failed')){
      Object.values(err.errors).forEach(({properties})=>{
          errors[properties.path] = properties.message;
      })
   }
   
   return errors;

   }

//registration route
//@desc url /api/user/register
router.post("/register", async (req, res) => {
 
//validate the input
const {username,email,password,password2 } = req.body;

//check if user already exists
  const emailExist = await User.findOne({ email });
  if(emailExist) return res.status(404).send("email already exists");

//hash password
const salt = await bcrypt.genSalt(12);
const encryptedPassword = await bcrypt.hash(password, salt);


aq
//creating a user
  const user = new User({
  name: req.body.name,
  username,
  email: req.body.email,
  password:encryptedPassword,
  password2: req.body.password2,
  role: req.body.role
});
try{
//saving a user to DB
  const savedUser = await user.save();
}catch(err){
 const errors =  handleErrors(err)
 res.status(400).json({errors})
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
  const errors =  handleErrors(err)
  res.status(400).json({errors})
}
});

// router.post('logout',(req,res)=>{
//   res.clearCookie('jwt');
//   res.redirect('/api/user/login')
// })

module.exports = router;