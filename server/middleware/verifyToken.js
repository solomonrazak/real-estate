import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({message: "Not authenticated"}); // token is not available
      jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload) => {
      if(err) return res.status(403).json({message: "Token is not valid"}); // token is available but not the same
      req.userId = payload.id


      next();
  
  })
  res.status(200).json({message: "You are authenticated"}); //token is available and correct

}