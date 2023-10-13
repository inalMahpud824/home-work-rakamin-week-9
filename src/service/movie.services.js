const prisma = require("../../prisma/prisma-client.js")

const getAllMovie = async (page = 1, pageSize = Number.MAX_SAFE_INTEGER) => {
    const halaman = Number(page)
    const perPage = Number(pageSize)
    const skip = (halaman - 1) * perPage;
    try{
        const result = await prisma.movies.findMany({
            skip,
            take: perPage,
        })
        return(result)
    }catch(error){
        console.error(error)
    }
}
const getMovieById = async (params) => {
    try{
        const id = parseInt(params)
        const result = await prisma.movies.findUnique({
            where:{
                id: id
            }
        })
        return(result)
    }catch(error){
        console.error(error)
    }
}

const createMovie = async (id, title, genres, year) => {
    try{
        const result = await prisma.movies.create({
            data:{
                id: id,
                title: title,
                genres: genres,
                year:year
            },select:{
                title: true,
                genres: true,
                year: true   
            }
        })
        return result
    }catch(err){
        console.error(err)
    }
}
const deleteMovieById = async (params) => {
    const id = parseInt(params)
    try{
        const result = await prisma.movies.delete({
            where:{
                id: id
            }
        })
        return (result)
    }catch(err) {
        console.error(err)
    }
}
const updateMoviesById = async (params, title, genres, year) => {
    const id = parseInt(params)
    try{
        const result = await prisma.movies.update({
            data: {
                title: title,
                genres: genres,
                year:year
            },
            where:{
                id: id
            },select: {
                title: true,
                genres: true,
                year: true   
            }
        })
        return (result)
    }catch(err){
        console.error(err)
    }
}
module.exports = {getAllMovie, createMovie, deleteMovieById, updateMoviesById, getMovieById}