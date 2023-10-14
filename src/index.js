const express = require('express')
const router = require('./route/index.js')
const { loggingMiddleware } = require('./middleware/index.js')
const app = express()


const port = 8000
app.use(express.json())

app.use(loggingMiddleware)
app.use(router)
app.listen(port, () => {
    console.log("aplikasi berjalan di port: " + port)
})