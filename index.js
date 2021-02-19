require('dotenv').config()

const express = require('express')
const app = express()
const AdminRoutes = require('./Routes/AdminRoutes')
const VendingRoutes = require('./Routes/VendingRoutes')
const DB = require('./Utils/Database')

async function initialize(){
    app.use(express.json())
    app.use('/admin', AdminRoutes)
    app.use('/vending', VendingRoutes)
    DB.initialize()
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
}

initialize()