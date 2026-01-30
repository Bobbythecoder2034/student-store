const mongoose = require('mongoose')

const customSchema = new mongoose.Schema({


        // customer info (name/email/phone/address)
        name:{type:String, required:true, trim:true, maxlength:100},
        email:{type:String, required:true, trim:true, maxlength:100},
        phone:{type:Number, required:true, trim:true, maxlength:100},
        address:{type:String, required:true, trim:true, maxlength:100},

        // description, preferences (color/material/size)
        description:{type:String, required:true, trim:true, maxlength:1000},
        
        // preferences
        color:{type:String, required:true, trim:true, enum:['red','blue','yellow','orange','purple', 'green']},
        material:{type:String, required:true, trim:true, enum:['Nylon','PLA','ABS']},
        size:{type:String, required:true, trim:true, maxlength:100},

        // reference file URLs + metadata
        urls:{type:Array, required:true, trim:true, maxlength:1000},
        metadata:{type:String, required:true, trim:true, maxlength:1000},

        // status (Submitted/Reviewed/Quoted/In Progress/Completed)
        status:{type:String,required:true,enum:['Pending','In Progress', 'Ready', "completed", "Cancelled"]},

        // internal notes, assigned student/printer (optional)
        notes:{type:String, required:false, default:'no notes', trim:true, maxlength:1000},
        printer:{type:String, required:false, default:'terry', trim:true, maxlength:1000}

        
},{timestamps:true})// timestamps



module.exports = mongoose.models.Custom || mongoose.model("Custom", customSchema)