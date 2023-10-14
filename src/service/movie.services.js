const prisma = require("../../prisma/prisma-client.js");

class ResponseError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const getAllMovie = async (page = 1, pageSize = Number.MAX_SAFE_INTEGER) => {
  const halaman = Number(page);
  const perPage = Number(pageSize);
  const skip = (halaman - 1) * perPage;
  const result = await prisma.movies.findMany({
    skip,
    take: perPage,
  });
  if (!result) {
    throw new ResponseError(500, "Server Error");
  }
  return result;
};
const getMovieById = async (params) => {
  const id = parseInt(params);
  const result = await prisma.movies.findUnique({
    where: {
      id: id,
    },
  });
  if (!result) {
    throw new ResponseError(404, "not found");
  }
  return result;
};

const createMovie = async (id, title, genres, year) => {
  const result = await prisma.movies.create({
    data: {
      id: id,
      title: title,
      genres: genres,
      year: year,
    },
    select: {
      title: true,
      genres: true,
      year: true,
    },
  });
  return result;
};
const deleteMovieById = async (params) => {
  const id = parseInt(params);
  const cekId = await prisma.movies.findUnique({
    where: {
      id: id,
    },
  });
  if (!cekId) {
    throw new ResponseError(404, "not found");
  }
  const result = await prisma.movies.delete({
    where: {
      id: id,
    },
  });
  return result;
};
const updateMoviesById = async (params, title, genres, year) => {
  const id = parseInt(params);
  const cekId = await prisma.movies.findUnique({
    where: {
      id: id,
    },
  });
  if (!cekId) {
    throw new ResponseError(404, "not found");
  }
  const result = await prisma.movies.update({
    data: {
      title: title,
      genres: genres,
      year: year,
    },
    where: {
      id: id,
    },
    select: {
      title: true,
      genres: true,
      year: true,
    },
  });
  return result;
};
module.exports = {
  getAllMovie,
  createMovie,
  deleteMovieById,
  updateMoviesById,
  getMovieById,
};
