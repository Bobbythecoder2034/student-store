/**
 * Admin Controller
 * 
 * - Admin only endpoints to view/manage all users and courses
 * 
 * All routes using these controllers should be protected with:
 * -requireAuth
 * -requireAdmin
 */
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const CustomOrder = require('../models/CustomOrder')


function signToken(user){
    //JWT best practices: use 'sub' for subject (user id)
    return jwt.sign(
        {email:user.email, name:user.name,},
        process.env.JWT_SECRET,
        {subject:String(user._id), expiresIn: process.env.JWT_EXPIRES_IN || '7d'}
    )
    
}

//GET /api/admin/users
async function getAllUsers(req, res, next){
    try{
        const users = await User.find().select("-passwordHash").sort({createdAt: -1})
        res.json({data:users})
    }catch (err){
        next(err)
    }
}

//DELETE /api/admin/users/:id
//Also deletes that user's courses
async function deleteUser(req,res,next){
    try {
        const targetId = req.params.id

        if(String(targetId)===String(req.user.id)){
            return res.status(400).json({error:"You cannot delete your own admin account"})
        }

        const deletedUser = await User.findByIdAndDelete(targetId)
        if(!deletedUser){
            return res.status(404).json({error:"User Not Found"})
        }
        await CustomOrder.deleteMany({owner: targetId})
        res.json({data:{deletedUser:targetId}})
    } catch (error) {
        next(error)
    }
}

//GET /api/admin/courses
//Include populate for owner, name email role
//Sort data ascending order
async function getAllProducts(req,res,next){
    try {
        const courses = await Product.find().populate('owner',"name email role").sort({createdAt: -1});
        res.json({data:courses});
    } catch (error) {
        next(error)
    }
}
// POST /api/admin/login
async function adminLogin(req,res,next) {
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({error: "Email and Password are required"})
        }

        const user = await User.findOne({email:email.toLowerCase()})
        if(!user) return res.status(401).json({error: "Invalid Credentials"})
        
        const ok = await bcrypt.compare(password, user.passwordHash)
        if(!ok) return res.status(404).json({error:"Invalid Credentials"})
        // Invalid Credentials is there to avoid lawsuits, as telling people which one is wrong reduces possible outcomes
        
        const token = signToken(user)
        //sends this back to the user
        res.json({
            data:{
                token,
                user:{id: user._id, name: user.name, email: user.email, role: user.role},
                what:{stuff: "Successful Admin Login"}
            }
        })
    }catch(err){
        next(err)
    }
}
//Change this to work for our things
module.exports = {adminLogin}