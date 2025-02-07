const mongoose = require('mongoose');

const trackingSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    foodName: {
        type: String,
        required: true
    },
    foodId: {
        type: String,
        required: true
    },
    details: {
        calories: Number,
        protein: Number,
        carbohydrates: Number,
        fat: Number,
        fiber: Number,
    },
    eatenDate: {
        type: String,
        default: () => {
            const date = new Date();
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // Formats as DD/MM/YYYY
        }
    },
    quantity: {
        type: Number,
        min: 1,
        required: true
    }
}, { timestamps: true });

const trackingModel = mongoose.model("trackings", trackingSchema);

module.exports = trackingModel;
