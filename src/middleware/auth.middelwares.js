const jwt = require("jsonwebtoken");
const prisma = require("../../prisma/prisma-client.js");
require("dotenv").config();

const key = process.env.JWT_SECRET

async function authorization(req, res, next) {
  try {
    const aksesToken = req.header("Authorization");
    if (!aksesToken) {
      return res.status(400).json({
        message: "Silahkan login terlebih dahulu",
      });
    }
    next()
  } catch (err) {
    return res.status(401).json({
      message: "Token akses tidak valid atau kedaluwarsa.",
    });
  }
}

module.exports = authorization;
