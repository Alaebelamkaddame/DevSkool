const jwt = require("jsonwebtoken");

const SECRET_KEY = "";
function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Decoded Token:", decoded);
    return decoded;
  } catch (err) {
    console.error("Invalid token:", err.message);
    return null;
  }
}

const userPayload = { id: 1, username: "alae", role: "admin" };
const token = generateToken(userPayload);
console.log("Generated Token:", token);

setTimeout(() => {
  verifyToken(token);
}, 2000); 
