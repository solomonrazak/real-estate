import jwt from "jsonwebtoken"; 

const shouldBeLoggedIn =  (req, res) => {
  const token = req.cookies.token;
  if(!token) return res.status(401).json({message: "Not authenticated"});  // token is not available
    jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload) => {
    if(err) return res.status(403).json({message: "Token is not valid"});  // token is available but not the same

})
res.status(200).json({message: "You are authenticated"});  //token is available and correct


}


// check authorzation for admin
const shouldBeAdmin = (req, res) => {
  const token = req.cookies.token;
  if(!token) return res.status(401).json({message: "Not authenticated"});
    jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload) => {
    if(err) return res.status(403).json({message: "Token is valid"});
    if(!payload.isAdmin){
      return res.status(403).json({message: "Not Authorized"})
    }

})
res.status(200).json({message: "You are authenticated"});

}

export {shouldBeLoggedIn, shouldBeAdmin};