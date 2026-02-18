const mongoose = require('mongoose')

const connectDB = async (URI) => {
     try {
        await mongoose.connect(URI)
        console.log('MongoDB connected')
     } catch (error) {
        throw new Error('MongoDB connection failed: ' + error.message)
     }
}

module.exports = connectDB