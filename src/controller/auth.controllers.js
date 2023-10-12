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

module.exports = {
    register
}