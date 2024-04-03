import jwt from "jsonwebtoken";

export const cookieJwtAuth = (req, res, next) => {
  const token = req.cookies.token;

  try {
    const user = jwt.verify(token, process.env.COOKIE_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.clearCookie("auth_token");
  }
};
