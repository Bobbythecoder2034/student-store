const express = require('express')
const router = express.Router()

const {requireAuth} = require('../middleware/authMiddleware')
const {requireAdmin} = require('../middleware/adminMiddleware')

const{
    adminLogin
} = require('../controllers/adminController')
router.use(requireAuth)
router.use(requireAdmin)


router.post('/login', adminLogin)
module.exports= router