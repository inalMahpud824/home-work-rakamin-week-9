const prisma = require("../../prisma/prisma-client.js")

const getAllMovie = async () => {
    try{
        const result = await prisma.movies.findMany()
        return(result)
    }catch(error){
        console.error(error)
    }
}
module.exports = {getAllMovie}