const prisma = require("../../prisma/prisma-client.js");
class ResponseError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
const getAllUsers = async (page = 1, pageSize = Number.MAX_SAFE_INTEGER) => {
  const halaman = Number(page);
  const perPage = Number(pageSize);
  const skip = (halaman - 1) * perPage;
  const result = await prisma.users.findMany({
    skip,
    take: perPage,
  });
  if (!result) {
    throw new ResponseError(500, "Server Error");
  }
  return result;
};
const getUserById = async (params) => {
  const id = parseInt(params);
  const result = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  if (!result) {
    throw new ResponseError(404, "not found");
  }
  return result;
};

const deleteUserById = async (params) => {
  const id = parseInt(params);
  const cekId = await prisma.users.findUnique({
    where:{
        id: id
    }
  })
  if(!cekId){
    throw new ResponseError(404, "not found");
  }
  const result = await prisma.users.delete({
    where: {
      id: id,
    },
  });
  return result;
};
const updateUserById = async (params, email, gender, password, role) => {
  const id = parseInt(params);
  const cekId = await prisma.users.findUnique({
    where:{
        id: id
    }
  })
  if(!cekId){
    throw new ResponseError(404, "not found");
  }
  const result = await prisma.users.update({
    data: {
      email: email,
      gender: gender,
      password: password,
      role: role,
    },
    where: {
      id: id,
    },
    select: {
      email: true,
      gender: true,
      role: true,
    },
  });
  return result;
};
module.exports = { getAllUsers, getUserById, deleteUserById, updateUserById };
