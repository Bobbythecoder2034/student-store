const Product = require('../models/Testimonial')
const Custom = require('../models/Custom')
const Testimonial = require('../models/Testimonial')

// GET /api/public/products (Filter/Search)
const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({})
        if(!products){
            res.status(404).json({message: 'There are no products'})
        }
    } catch (error) {
        next()
    }
}

// GET /api/public/products/by-slug?slug=...  To-Do


// POST /api/public/custom-orders (Create's a custom order)
const createCustom = async (req, res, next) => {
    try {
        const product = req.body
        if(!product){
            res.status(404).json({message: 'Missng information'})
        }
        const products = await Product.create(product)
    } catch (error) {
        next(error)
    }
}

// GET /api/public/testimonials (Gets the testimonials with the approved status)
const getTestimonial = (req, res, next) => {
    try {
        const testimonials = await Testimonial.find({})
        if(!testimonials){
            res.status(404).json({message: 'There are no testimonials'})
        }
    } catch (error) {
        next(error)
    }
}

// POST /api/public/testimonials (Create's a testimonial with the pending status ) 
const createTestimonial = () => {
    try {
        const incomingTestimonial = req.body
        if(!incomingTestimonial){
            res.status(404).json({message:'Missing information'})
        }
        const testimonials = await Testimonial.create(incomingTestimonial)
    } catch (error) {
        next(error)
    }
}

module.exports = getProducts, createCustom, getTestimonial, createTestimonial