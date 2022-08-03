const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name of a product"],
        trim: true,
        maxLength: [15, "Product name cannot exceed more than 20 characters"]
    },
    description: {
        type: String,
        required: [true, "Please add a description of your product"],
        maxLength: [4000, "Description cannot exceed more than 4000 characters"]
    },
    price: {
        type: Number,
        required: [true, "Please add a price for your product"],
        maxLength: [8, "Price cannot exceed more than 8 characters"]
    },
    discountPrice: {
        type: String,
        maxLength: [4, "Discount price cannot exceed more than 4 characters"]
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please add a category of your product"]
    },
    stock: {
        type: String,
        required: [true, "Please add some stock for your product"],
        maxLength: [3, "Stock cannot exceed more than 4 characters"]
    },
    numberOfReviews: {
        type: Number,
        default: 0        
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User"
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String
            },
            time: {
                type: Date,
                default: Date.now()
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Product", productSchema)