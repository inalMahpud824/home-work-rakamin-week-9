const prisma = require("../../prisma/prisma-client.js");
const jwt = require("jsonwebtoken");
require('dotenv').config();
class ResponseError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
const register = async (id, email, gender, password, role) => {
    const user = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      throw new Error("Email must be unique");
    }

    const createdUser = await prisma.users.create({
      data: {
        id: id,
        email: email,
        gender: gender,
        password: password,
        role: role,
      },
    });

    return {
      message: "User registered successfully",
      email: createdUser.email,
      role: createdUser.role,
    };
};

const login = async (email, password) => {
  const user = await prisma.users.findFirst({
    where: {
      email: email,
    },
    select: {
      email: true,
      id: true,
      password: true,
    },
  });
  if (!user) {
    throw new ResponseError(401, "Username or password wrong");
  }
  if (password !== user.password) {
    throw new ResponseError(401, "password wrong");
  }
  const payload = {
    id: user.id,
    email: user.email
  }
  const key = process.env.JWT_SECRET
  const aksesToken = jwt.sign(payload, key,{expiresIn: '1h'});
  return aksesToken
};

module.exports = { register, login };
