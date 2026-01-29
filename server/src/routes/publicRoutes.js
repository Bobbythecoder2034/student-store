const express = require('express')
const router = express.Router()

const {
    getProducts,
    // SLug function
    createCustom,
    getTestimonial,
    createTestimonial
} = require('../controllers/publicController')

router.get('/products', getProducts)
// router.get('/products/by-slug', getProducts) Fill when slug funciton is completed
router.post('/custom-orders', createCustom)
router.get('/testimonials', getTestimonial)
router.post('/testimonials', createTestimonial)