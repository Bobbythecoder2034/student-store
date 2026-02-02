require("dotenv").config()

const express = require("express")
const cors = require("cors")

const connectDB = require("./src/config/db")
const authRoutes = require("./src/routes/authRoutes")
const publicRoutes = require("./src/routes/publicRoutes")
// const errorHandler= require("./src/middleware/errorHandler")
const { connect } = require("mongoose")


const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true})) // Parses Form data for login if needed


// Health Check
app.get('/api/health', (req,res)=> res.json({ok:true}))

// Routes



app.use('/api/auth', authRoutes)
app.use('/api/public', publicRoutes)

// Error middleware goes last
// app.use(errorHandler)

const PORT = process.env.PORT || 5000

// Test
app.use('/', (req, res, next) => {res.send("Hello World!")})

connectDB(process.env.MONGODB_URI).then(() =>{
    app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`))
})