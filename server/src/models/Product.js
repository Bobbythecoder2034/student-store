const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, maxlength: 100},

        // *** slug = unique URL with no spaces used as the URL to navigate to the item
        slug: {type:String, required:true, maxlength: 50},
        
        description: {type: String, required:true, maxlength: 100},

        // material: {},

        // color
        
        price: {type: Number, required:true},
        category: {type: String, required:true, enum: ['miniatures', 'prototypes', 'functional-parts', 'decorative', 'toys', 'organizers']},
        inStock: {type: Boolean, default: true},
        featured: {type: Boolean, default: true}
    },
    {timestamps: true}
    
)

module.exports = mongoose.models.Product || mongoose.model("Product", productSchema)