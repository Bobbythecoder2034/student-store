const mongoose = require('mongoose')

const connectDB = async (URI) => {
     try {
        await mongoose.connect(URI)
        console.log('MongoDB connected')
     } catch (error) {
        console.error('MongoDB connection error', error.message)
     }
}

module.exports = connectDB