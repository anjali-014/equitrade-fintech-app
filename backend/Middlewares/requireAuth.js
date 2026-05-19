const jwt = require("jsonwebtoken");

// Accepts JWT from EITHER:
//  1. httpOnly cookie (set by login response)
//  2. Authorization: Bearer <token> header (sent by axios interceptor via localStorage)
// This makes auth work regardless of browser cross-origin cookie policies.
module.exports = (req, res, next) => {
  // Priority 1: cookie
  let token = req.cookies.token;

  // Priority 2: Authorization header (fallback for when cookies are blocked)
  if (!token) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7);
    }
  }

  if (!token) {
    console.warn("[requireAuth] No token found in cookie or Authorization header");
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.warn("[requireAuth] Invalid token:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};