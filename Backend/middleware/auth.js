import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "The request is unauthenticated",
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "The request is unauthenticated",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ attach to req.user instead of req.body
    req.user = { id: decoded.id };

    next();
  } catch (err) {
    console.error("Auth Middleware Error:", err);
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;
