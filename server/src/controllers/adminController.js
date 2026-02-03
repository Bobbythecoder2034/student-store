/**
 * Admin Controller
 * 
 * - Admin only endpoints to view/manage all users and courses
 * 
 * All routes using these controllers should be protected with:
 * -requireAuth
 * -requireAdmin
 */
const User = require('../models/User')
const Course = require('../models/Course')


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
//Change this to work for our things