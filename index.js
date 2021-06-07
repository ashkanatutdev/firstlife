'use strict';

const port = process.env.PORT || 3000;
const services = require('./services');
const functions = require('./functions');
const express = require('express');
const bodyParser = require('body-parser');
const {
    dialogflow,
    Image,
    Permission,
} = require('actions-on-google');

const app = dialogflow();

//intent handlers
app.intent('Default Welcome Intent', conv => {
    console.log(conv.body.originalDetectIntentRequest.source);
    conv.ask('Benvenuto, sono il tuo assistente personale. Posso consigliarti dove mangiare e dove comprare prodotti tipici piemontesi. Inoltre posso darti informazioni sui luoghi in cui si producono. Basta specificare la categoria o la descrizione di un prodotto.');
});

app.intent('main', conv => {
    const source = conv.body.originalDetectIntentRequest.source;
    let context = '';
    let permissions = '';
    let params = conv.parameters;

    //user has not mentioned "nei dintorni or nella mia citta or ..." so, chatbot shows all the locations to user
    if (params.posizione == '') {

        //chatbot answer...
        let RES = functions.risposta(params.categorie, params.domanda, params.attivita, '', null);
        conv.ask(RES);

    } else {//user has mentioned "nei dintorni or nella mia citta or ..." so we ask his/her location from his/her Google Account

        //if user is connected from Google Assistant
        if (source == 'google') {
            if (conv.user.verification === 'VERIFIED') {
                permissions = 'DEVICE_PRECISE_LOCATION';
                context = 'Per sapere la tua posizione';
            } else {
                conv.close('Non sei verificato');
            }
            const options = {
                context,
                permissions,
            };

            //asking permission from user for access in his/her data on Google Account
            conv.ask(new Permission(options));

        //if user is connected from another platform (not Google Assistant), we change this part later...
        } else {
            let zipCode = conv.contexts.get('main-followup').parameters.zipCode || '';
            if (zipCode == '') {
                conv.ask('mi puoi dare il codice postale della tua posizione?');
            } else {
                console.log(zipCode);
                conv.ask(`la tuo codice postale è: ${zipCode}`);
            }
        }
    }
});

//when user uses Google Assistant
app.intent('ottenere_posizione', (conv, params, confirmationGranted) => {
    console.log(conv.body.originalDetectIntentRequest.source);
    const {location} = conv.device;
    console.log(params);

    //if chatbot has access to user data in his/her Google Account...
    if (confirmationGranted && location) {
        //console.log(location);

        //chatbot answer...
        let RISPOSTA = functions.risposta(params.categorie, params.domanda, params.attivita, params.posizione, location);
        console.log(RISPOSTA);
        conv.ask(RISPOSTA);

    } else {//if user does not give permission to access the data on his/her Google Account to chatbot
        conv.close(`non sono riuscito a capire la tua posizione.`);
    }
});

//if user is connected from another platform (not Google Assistant), we change this part later...
app.intent('main_ottenere_cap', conv => {
    console.log(conv.body.originalDetectIntentRequest.source);
    let params = conv.parameters;
    let zipCode = params.zipCode;
    console.log(zipCode);
    conv.ask(`la tuo codice postale è: ${zipCode}`);
});
//end intent handlers

//Run the app
const expressApp = express().use(bodyParser.json());
expressApp.post('/fulfillment', app);
expressApp.listen(port, function () {
    console.log('FirstLife is runnign on ...' + port);
});