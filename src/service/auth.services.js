const prisma = require("../../prisma/prisma-client.js");

const register = async (id, email, gender, password, role) => {
  try {
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

    return{
      message: "User registered successfully",
      email: createdUser.email,
      role: createdUser.role,
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register };
