const express = require('express')
const router = express.Router()
const multer = require('multer') // Handles file uploads

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

const {
    getProducts,
    getProductById,
    createCustom,
    createCustomFile,
    getCustom,
    getTestimonial,
    createTestimonial
} = require('../controllers/publicController')

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
// router.get('/products/by-slug', getProducts) //Fill when slug funciton is completed
router.get('/customs', getCustom)
router.post('/custom-orders', createCustom)
router.post('/custom-orders/file', upload.single('file'), createCustomFile) // Endpoint for file uploads
router.get('/testimonials', getTestimonial)
router.post('/testimonials', createTestimonial)

module.exports = router