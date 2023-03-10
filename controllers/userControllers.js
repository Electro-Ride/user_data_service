const User= require('../models/user');
const mongoose= require('mongoose');
//import { validateEmail } from '../utils/checkformats';
const validateEmail= require('../utils/checkformats')
const router= require('express').Router()

//register user with all the details given
router.post('/create_user', async (req, res) => {

    const body = req.body;
    console.log(body);
    if(validateEmail(body.Email)){
        const user= new User({
            Name: body.Name,
            Email: body.Email,
            phone_number: body.phone_number,
        })
        user.save()
        .then((result) =>{
            res.send(result);
        }).catch((err)=> res.send("user registered"));
    }
    else
    {
        res.send('please check formats of the values entered');
    }
})

// login user and check if already registered

router.get('/login_user', async (req, res) => {

    const body = req.body;
    console.log(body);
    const phoneNumberRequest = body.phoneNumber;
    User.find({phone_number: phoneNumberRequest}).then((result)=>{
        if(result.length === 0){
            res.json({
                "result_code":0,
                "message":"user does not exist"
            })
        } else {
            res.json({
                "result_code":1,
                "message":"user found",
                "body": result[0],
            })
        }
    }).catch((err)=>{
        res.send(err);
    });

})

router.post('/update_kyc', async (req,res) =>{
    const body = req.body;
    console.log(body)
    const phone_number_query= body.phone_number;
    const upload_kyc = {
        driving_license_link: body.driving_license_link,
        official_photo_link: body.official_photo_link,
        video_shot_link: body.video_shot_link,
        other_doc_link: body.other_doc_link,
        is_kyc_uploaded: true
    }
    User.findOneAndUpdate({phone_number:phone_number_query}, upload_kyc)
        .then((result)=> {
            res.send(result);
    }).catch((err)=>{
        res.send(err);
    })

})
module.exports= router;