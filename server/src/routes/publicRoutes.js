const express = require('express')
const router = express.Router()
const multer = require("multer") // Handles file uploads
const path = require("path") // For handling file paths

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, path.join(__dirname, '../uploads')) // Save files to uploads folder
    },
    filename(req, file, cb){        
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) // Gives a unique filename to avoid conflicts
        cb(null, uniqueName + path.extname(file.originalname)) // Preserves the original file extension
    }
})

const upload = multer({
    storage: storage, // Uses the defined storage configuration
    limits: {fileSize: 10 * 1024 * 1024}, // 10MB limit
    fileFilter(req, file, cb){ // Request, file info, and callback to reject/accept the file
        if(!file.originalname.match(/\.(stl|zip|obj)$/i)){ // Regex for file type
            return cb(new Error('Only STL, ZIP or OBJ files allowed'))
        }
        cb(null, true)
    }
})

const {
    getProducts,
    // SLug function
    createCustom,
    getCustom,
    getTestimonial,
    createTestimonial
} = require('../controllers/publicController')

router.get('/products', getProducts)
// router.get('/products/by-slug', getProducts) Fill when slug funciton is completed
router.get('/customs', getCustom)
router.post('/custom-orders', upload.single('file'), createCustom)
router.get('/testimonials', getTestimonial)
router.post('/testimonials', createTestimonial)

module.exports = router