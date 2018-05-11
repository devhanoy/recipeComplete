const jwt = require("jsonwebtoken");

async function verifyUser(ctx, next) {
  try {
    const token = ctx.request.headers.authorization.substring(7);
    const decodedToken = await verify(token);
    ctx.request.user = decodedToken;
    await next();
  } catch (err) {
    ctx.redirect("/login");
  }
}

async function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "randomSecret", (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err);
      }

      resolve(decodedToken);
    });
  });
}

function createToken(payload) {
  return jwt.sign(payload, "randomSecret", {
    expiresIn: "7 days"
  });
}

module.exports = {
  verifyUser,
  createToken
};
