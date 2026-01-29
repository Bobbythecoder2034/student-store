import mongoose from 'mongoose'

// ryder
const standardSchema = new mongoose.Schema({

        // customer info (name/email/phone/address)
        name:{type:String, required:true, trim:true, maxlength:100},
        email:{type:String, required:true, trim:true, maxlength:100},
        phone:{type:Number, required:true, trim:true, maxlength:100},
        address:{type:String, required:true, trim:true, maxlength:100},

        // items [productId, name snapshot, price snapshot, qty]
        items:{type:Array, required:true, trim:true},

        // totals (subtotal/tax/total)
        subtotal:{type:Number, required:true, trim:true},
        tax:{type:Number, required:true, trim:true},
// do total down below with the methods and what not

        // status (Pending/In Progress/Ready/Completed/Cancelled)
        status:{type:String,required:true,enum:['Pending','In Progress', 'Ready', "completed", "Cancelled"]},

        // paid flag (future payments)
        paidFlag:{type:Number, required:false, default:0.00},

        // admin notes, print notes
        adminNotes:{type:String, required:false, default:"no notes"},
        printNotes:{type:String, required:false, default:"no notes"},

},{timestamps:true})// timestamps

standardSchema.virtual("total").get(()=>{

        return this.subtotal + this.tax

})

module.exports = mongoose.models.Standard || mongoose.model("Standard", standardSchema)