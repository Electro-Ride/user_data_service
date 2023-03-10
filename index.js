const express= require('express');
const helmet = require('helmet');
const morgan= require('morgan');
const dotenv = require('dotenv');
const app= express();
const { Router } = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const Ride = require('./models/ride');
const UserController = require('./controllers/userControllers');
const RideController = require('./controllers/rideController')
dotenv.config();

const user_db_uri= process.env.USER_DB_URI;
console.log(user_db_uri);

mongoose.connect(user_db_uri, { useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => {
            console.log("db Connected");
            console.log(`Result --> \n ${result}`);
        })
        .catch((err) => console.log(err));


app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req,res) => {
    res.status(200).json({"test" : "succeded"});
})

app.use('/api/user/',UserController);
app.use('/app/ride/', RideController);
app.listen(process.env.PORT, () => {
    console.log(`Server now listening on port ${process.env.PORT}`);
})