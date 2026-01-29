import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
    name:{type: String, required:true, },
    rating:{enum:[1, 2, 3, 4, 5]},
    message:{required: false, type: String, maxLength:1000},
    status:{type: Boolean, required:true}
},{timestamps:true})


module.exports = mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema)