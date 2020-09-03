const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin : true})
const admin = require("firebase-admin");

const config = functions.config();
admin.initializeApp();

const transporter = nodemailer.createTransport({
    service : 'Gmail',
    auth : { user : 'parupalli9999@gmail.com', pass : 'hemanth@9999'}

});

let mailOptions = {
    from : 'Arc development',
    to : 'babuparupalli@gmail.com',
    subject : "testing nodemailer",
    text : "Test successfull"
}

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
    cors( request, response, () =>{
        transporter.sendMail(mailOptions, error =>{
            if(error){
                response.send(error)
            } else {
                response.send('Mail sent successfully')
            }
        })
    })
 
});
