const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name:{
        type: String,
        required: true,
    },
    Email:{
        type: String, 
        required: true,
    },
    profile_photo_link:{
        type: String, 
        required: false,
        default: "",
    },
    phone_number:{
        type: String, 
        required: true,
        unique: true,
        default: "",
    },
    driving_license_link:{
        type: String, 
        required: false,
        default: "",
    },
    official_photo_link:{
        type: String, 
        required: false,
        default: "",
    },
    video_shot_link:{
        type: String, 
        required: false,
        default: "",
    },
    other_doc_link:{
        type: String, 
        required: false,
        default: "",
    },
    is_kyc_uploaded:{
        type: Boolean, 
        required: false,
        default: false,
    },
    is_kyc_verified:{
        type: Boolean, 
        required: false,
        default: false,
    },
    is_riding:{
        type: Boolean, 
        required: false,
        default: false,
    },
    profile_photo_link:{
        type: [String], 
        required: false,
        default: [],
    },

})

const User = mongoose.model('user', userSchema);
module.exports= User; 