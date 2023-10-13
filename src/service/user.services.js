const prisma = require("../../prisma/prisma-client.js")

const getAllUsers = async (page = 1, pageSize = Number.MAX_SAFE_INTEGER) => {
    const halaman = Number(page)
    const perPage = Number(pageSize)
    const skip = (halaman - 1) * perPage;
    try{
        const result = await prisma.users.findMany({
            skip,
            take: perPage,
        })
        return(result)
    }catch(error){
        console.error(error)
    }
}
const getUserById = async (params) => {
    try{
        const id = parseInt(params)
        const result = await prisma.users.findUnique({
            where:{
                id: id
            }
        })
        return(result)
    }catch(error){
        console.error(error)
    }
}

const createUser = async (id, email, gender, password, role) => {
    try{
        const result = await prisma.movies.create({
            data:{
                id: id,
                email: email,
                gender: gender,
                password: password,
                role: role
            },select:{
                email: true,
                gender: true,
                role: true
            }
        })
        return result
    }catch(err){
        console.error(err)
    }
}
const deleteUserById = async (params) => {
    const id = parseInt(params)
    try{
        const result = await prisma.users.delete({
            where:{
                id: id
            }
        })
        return (result)
    }catch(err) {
        console.error(err)
    }
}
const updateUserById = async (params, email, gender, password, role) => {
    const id = parseInt(params)
    try{
        const result = await prisma.users.update({
            data: {
                email: email,
                gender: gender,
                password: password,
                role: role
            },
            where:{
                id: id
            },select: {
                email: true,
                gender: true,
                role: true
            }
        })
        return (result)
    }catch(err){
        console.error(err)
    }
}
module.exports = {getAllUsers, getUserById, createUser, deleteUserById, updateUserById}