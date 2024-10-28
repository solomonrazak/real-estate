import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

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

const login = (req, res) => {
    //db operation - user login
    res.status(200).json({msg: "user logged in"});
}

const logout = (req, res) => {
    //db operation - user logout
    res.send("User logged out");
}

export {register, login, logout};