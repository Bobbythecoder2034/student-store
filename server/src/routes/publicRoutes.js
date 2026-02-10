const express = require('express')
const router = express.Router()
const multer = require("multer") // Handles file uploads
const upload = multer({
    limits: {fileSize: 10 * 1024 * 1024}, // 10MB limit
    fileFilter(req, file, cb){ // Request, file info, and callback to reject/accept the file

        if(!file.originalname.match(/\.(stl|obj)$/i)){ // Regex for file type
            return cb(new Error('Only STL or OBJ files allowed'))
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
router.post('/custom-orders', createCustom)
router.get('/testimonials', getTestimonial)
router.post('/testimonials', createTestimonial)

module.exports = router