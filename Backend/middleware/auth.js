import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    // If using 'Authorization: Bearer <token>'
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "The request is unauthenticated" });
    }

    const token = authHeader.split(" ")[1]; // get the token part
    if (!token) {
      return res.status(401).json({ success: false, message: "The request is unauthenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (err) {
    console.error("Auth Middleware Error:", err);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authMiddleware;
