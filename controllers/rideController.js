const Ride= require('../models/ride');
const mongoose= require('mongoose');

const router= require('express').Router()

//register user
router.post('/create_ride', async (req, res) => {
    
    const body = req.body;
    console.log(body);
    const ride= new Ride({
        ride_id: body.ride_id,
        model: body.model,
        chasis: body.chasis,
        current_loc: body.current_loc,
        is_being_used: body.is_being_used,
        battery: body.battery,
    })
    
    ride.save()
        .then((result) =>{
            res.send(result);
        }).catch((err)=> res.send(err));
    
})

module.exports= router;