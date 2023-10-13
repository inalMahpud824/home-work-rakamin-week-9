const {userServices} = require("../service")

async function getAllUsers(req, res) {
    const page = req.query.page
    const pageSize =  req.query.page_size
    try{
        const result = await userServices.getAllUsers(page, pageSize)
        res.status(200).json(result)
    }catch(err){
        console.error(err)
        res.status(500).send(err.message);
    }
}

async function getUserById(req, res) {
    const {id} = req.params
    try{
        const result = await userServices.getUserById(id)
        res.status(200).json(result)
    }catch(err){
        console.error(err)
        res.status(500).send(err.message);
    }
}


async function deleteUserById(req, res) {
    try{
        const {id} = req.params
        const result = await userServices.deleteUserById(id)
        res.status(200).json({messege: "delete success ",result})
    }catch(err){
        console.error(err)
        res.status(500)
    }
}

async function updateUserById(req, res) {
    try{
        const {id} = req.params
        const {email, gender, password, role} = req.body
        const result = await userServices.updateUserById(id, email, gender, password, role)
        res.status(200).json({messege: "update success ",result})
    }catch(err) {
        console.error(err)
        res.status(500)
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
}