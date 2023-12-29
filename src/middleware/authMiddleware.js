const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(decoded)
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ message: 'Forbidden' });
  }
};

module.exports = authenticateToken;
