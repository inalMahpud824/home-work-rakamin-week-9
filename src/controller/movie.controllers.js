const {movieServices} = require("../service")

async function getAllMovie(req, res) {
    try{
        const result = await movieServices.getAllMovie()
        res.json(result)
    }catch(err){
        console.error(err)
        res.status(500).send(err.message);
    }
}

module.exports = {
    getAllMovie
}