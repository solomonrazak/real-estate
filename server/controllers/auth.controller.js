import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  
  // db operations - create a new user

  const {username, email, password} = req.body;

  // HASH THE PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
 

  // CREATE A NEW USER AND SAVE TO THE DB

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password:hashedPassword
    }
    
  })
  console.log(newUser);
  res.status(201).json({msg: "User created successfully"});
  console.log(req.body);
};

const login = async (req, res) => {
    //db operation - user login
    const {username , password} = req.body;

  try {
     //CHECK IF USER EXISTS
    const user = await prisma.user.findUnique({
      where:{username}
    })
    if(!user) return res.status(401).json({msg: "Invalid Credentials"})

  

   

    //CHECK IF USER PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.status(401).json({msg: "Invalid Credentials"});

    //GENERATE A COOKIE TOKEN AND SEND IT TO THE USER
    // res.setHeader("Set-Cookie", "test=" + "myValue").json({msg: "Successfully logged in"}) -- using cookie parser now

    const age = 1000 * 60 * 60 * 24 * 7

    const token = jwt.sign({
      id:user.id
    }, process.env.JWT_SECRET_KEY, {expiresIn: age})
   

    const {password: userPassword, ...userInfo} = user;
    
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true - make sure you set to true in production mode https
      maxAge: age,
    }).status(200).json({userInfo})
  }
  catch(error){
    console.log(error);
    res.status(500).json({msg: "Failed to login!"})
  }

    
}

const logout = (req, res) => {
    //db operation - user logout
    res.clearCookie("token").status(200).json({msg: "Logged out successfully"})
}

export {register, login, logout};