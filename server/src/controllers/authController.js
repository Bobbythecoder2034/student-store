const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

/**
 * Auth Controller:
 * --> Register/Login
 * -->Issues JWT Token
 */

function signToken(user){
    //JWT best practices: use 'sub' for subject (user id)
    return jwt.sign(
        {id: user._id, role: user.role, email: user.email},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN || '7d'}
    )
    
}

// POST /api/auth/register
const register = async (req, res) =>{
    try{
        const {name, email, address, password} = req.body

        if(!name || !email || !address || !password) return res.status(400).json({error: "Missing required fields"})

        const normalizedEmail = email.toLowerCase().trim()
        
        const existing = await User.findOne({email: normalizedEmail})
        if(existing) return res.status(409).json({ error: "Email already in use"})
        
        const passwordHash = await bcrypt.hash(password, 12)

        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            address: address.toLowerCase().trim(),
            passwordHash,
            role: "user",
        });

        const token = signToken(user)
        
        //This is so that the site doesn't need to decode the token to find a user.
        //The token is only for the server for verification. Front-end should not be decrypting everything.
        res.status(201).json({
            data: {
                message: "Registered",
                token,
                user: {id: user._id, name: user.name, email: user.email, role: user.role},
            }
        })
    }catch(err){
        return res.status(500).json({message: err.message || "Server Error"})
    }
}

// POST /api/auth/login
const login = async (req, res) =>{
    try{
        const {email, password} = req.body
        if(!email || !password) return res.status(400).json({error: "Email and Password are required"})

        const normalizedEmail = email.toLowerCase().trim()

        const user = await User.findOne({email: normalizedEmail})
        if(!user) return res.status(401).json({error: "Invalid Credentials"})
        
        const ok = await bcrypt.compare(password, user.passwordHash)
        if(!ok) return res.status(404).json({error: "Invalid Credentials"})
        // Invalid Credentials is there to avoid lawsuits, as telling people which one is wrong reduces possible outcomes

        const token = signToken(user)
        //sends this back to the user
        res.json({
            data:{
                message: "Logged in",
                token,
                user:{id: user._id, name: user.name, email: user.email},
            }
        })
    }catch(err){
        return res.status(500).json({message: err.message || "Server Error"})
    }
}
module.exports = {signToken, register, login}