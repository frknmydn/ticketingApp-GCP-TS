import jwt from 'jsonwebtoken';


const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, 'asfg', (err, user) => {
      if (err) {
        // Invalid token
        return res.sendStatus(403);
      }

      req.user = user; 
      next();
    });
  } else {
    
    res.sendStatus(401);
  }
};

export {authenticateJWT}