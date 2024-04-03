import jwt from "jsonwebtoken";
export function checkAuth(req, res, next) {
  try {
    const token = req.body.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Auth failed" });
  }
}
