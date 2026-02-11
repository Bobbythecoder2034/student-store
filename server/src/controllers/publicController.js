const Product = require('../models/Product')
const Custom = require('../models/CustomOrder')
const Testimonial = require('../models/Testimonial')

// GET /api/public/products (Filter/Search)
const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({})
        if(!products){
            res.status(404).json({message: 'There are no products'})
        }
        res.json(products)
    } catch (error) {
        res.status(404).json({message: error})
    }
}

// GET /api/public/products/:id (Filter/Search)
const getProductById = async (req, res, next) => {
    try {
        const targetId = req.params.id
        const product = await Product.findById({id})
        if(!product){
            res.status(404).json({message: 'There is no product'})
        }
        res.json(product)
    } catch (error) {
        res.status(404).json({message: error})
    }
}

// GET /api/public/customs (Filter/Search)
const getCustom = async (req, res, next) => {
    try {
        const customs = await CustomOrder.find({})
        if(!customs){
            res.status(404).json({message: 'There are no customs'})
        }
        res.json(customs)
    } catch (error) {
        res.status(404).json({message: 'nope'})
    }
}

// GET /api/public/products/by-slug?slug=...  To-Do


// POST /api/public/custom-orders (Create's a custom order)
const createCustom = async (req, res, next) => {
    try {
        const incomingCustoms = req.body
        if(!incomingCustoms){
            res.status(404).json({message: 'Missing information'})
        }
        
        const customs = await CustomOrder.create(incomingCustoms)
    } catch (error) {
        next(error)
    }
}

// GET /api/public/testimonials (Gets the testimonials with the approved status)
const getTestimonial = async (req, res, next) => {
    try {
        const testimonials = await Testimonial.find({})
        if(!testimonials){
            res.status(404).json({message: 'There are no testimonials'})
        }
        res.json(testimonials)
    } catch (error) {
        next(error)
    }
}

// POST /api/public/testimonials (Create's a testimonial with the pending status ) 
const createTestimonial = async (req, res, next) => {
    try {
        const incomingTestimonial = req.body
        if(!incomingTestimonial){
            res.status(404).json({message:'Missing information'})
        }
        const testimonials = await Testimonial.create(incomingTestimonial)
        res.status(201).json({testimonials})
    } catch (error) {
        next(error)
    }
}

module.exports = {getProducts, getProductById, getCustom, createCustom, getTestimonial, createTestimonial}