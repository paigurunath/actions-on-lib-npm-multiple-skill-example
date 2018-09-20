'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');
const express = require('express')
const bodyParser = require('body-parser')
var app2 = require('./app/app2');

// Instantiate the Dialogflow client.
const app = dialogflow();

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent('favorite color', (conv, {color}) => {
    const luckyNumber = color.length;
    // Respond with the user's lucky number and end the conversation.
    console.log(color + ' your lucky number is ' + luckyNumber);
    console.log(JSON.stringify(conv));
    conv.close('Your lucky number is ' + luckyNumber);
});

const expressApp = express().use(bodyParser.json())
 
expressApp.post('/dialogNodeFulfillment', app)
expressApp.post('/dialogNodeApp2', app2)
 
expressApp.listen(process.env.PORT);
// expressApp.listen(80)
console.log("Server started and running on port!!! 80");