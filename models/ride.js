const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideSchema = new Schema({

    ride_id:{
        type: String,
        required: true,
    },
    model:{
        type: String,
        required: true,
    },
    chasis: {
        type: String,
        required: true,
    },
    current_loc: {
        type: String,
        required: true,
    },
    is_being_used: {
        type: Boolean,
        required: true,
    },
    battery: {
        type: Number,
        required: true
    },

})
const Ride = mongoose.model('ride',rideSchema);
module.exports= Ride;