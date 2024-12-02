import jwt from "jsonwebtoken"; 

const shouldBeLoggedIn = async (req, res) => {
  const token = req.cookies.token;
  if(!token) return res.status(401).json({message: "Not authenticated"});
    jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload) => {
    if(err) return res.status(403).json({message: "Token is valid"})

})
res.status(200).json({message: "You are authenticated"})

}

const shouldBeAdmin = async(req, res) => {

}

export {shouldBeLoggedIn, shouldBeAdmin};