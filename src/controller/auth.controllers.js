const {authServices} = require('../service')

async function register (req, res) {
    const {id, email, gender, password, role} = req.body
    try{
        const user = await authServices.register(id, email, gender, password, role)
        res.json({ message: 'User registered successfully', user });
    }catch {
        res.status(400).json({ error: 'Registration failed' });
    }
}

async function login (req, res) {
    const {email, password} = req.body
    try{
        const result = await authServices.login(email, password)
        res.status(200).header('Authorization', `${result}`).json({
            data: result,
            message: "login berhasil"
        })
        // res.json({ message: 'User login successfully', user });
    }catch(error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}


module.exports = {
    register,
    login
}