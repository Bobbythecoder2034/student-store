const express = require('express')
const router = express.Router()
const multer = require('multer') // Handles file uploads

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

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