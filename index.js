const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes');

const app = express()
app.use(cors());
app.use(express.json());
app.use('/', router)

const PORT = 5000;

const URI = "mongodb+srv://QuizApp:QuizApp@cluster0.ae3vz.mongodb.net/quizapp?retryWrites=true&w=majority";

mongoose.connect(URI).then(()=>{
    try{
        app.listen(PORT, () => {
            console.log("Server is up and Running on"+" "+PORT)
        })
    } catch(err){
        console.log(err)
    } 
}) 

