const mongoose = require('mongoose')

const customSchema = new mongoose.Schema({

        name:{type:String, required:true, trim:true, maclength:80},
        email:{type:String, required:true, unique:true, lowercase:true, trim:true},
        address:{type:String, required:true, unique:true, lowercase:true, trim:true},
        passwordHash:{type:String, required:true, },
        role:{type:String, required: true, Enum:["admin","user"]}
        
},{timestamps:true})// timestamps



module.exports = mongoose.models.User || mongoose.model("User", customSchema)