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

/**
 * manages welcome massage and everything user will see when strat to use the chatbot
 */
app.intent('Default Welcome Intent', conv => {
    console.log(conv.body.originalDetectIntentRequest.source);
    conv.ask('Benvenuto, sono il tuo assistente personale. Posso consigliarti dove mangiare e dove comprare prodotti tipici piemontesi. Inoltre posso darti informazioni sui luoghi in cui si producono. Basta specificare la categoria o la descrizione di un prodotto.');
});

/**
 * when user askes chatbot to search for somthing 'main' intent is activated and manages user's request,
 * if user does not ask chatbot to search for a category in a specefic location like 'nei dintorni'
 * or 'nella mia citta' or 'nella mia regione' or ..., so chatbot does not need to get user's position, so
 * answers user's request within 'main' request, but if user asks chatbot to search in a specefic location
 * and mentions 'nei dintorni' or 'nella mia citta' or ... in the request, chatbot needs to get user's location
 * so pass the parameteres to next intent 'ottenere_posizione' and manages everything there.
 */
app.intent('main', conv => {
    const source = conv.body.originalDetectIntentRequest.source;
    let context = '';
    let permissions = '';
    let params = conv.parameters;

    //user has not mentioned "nei dintorni or nella mia citta or ..." so, chatbot shows all the locations to user
    if (params.posizione == '') {

        /** RES = CHATBOT ANSWER, and comes from 'functions.js' based on user's request
         *- params.categorie : this is the category which user asked for search from chatbot - eg: 'Taralli' or 'Ricotte'
         *- params.domande : this is the type of user's question and could be : 'dove', 'quali' or ...
         *- params.attivita : this could be 'mangiare', 'trovare', 'comprare', 'acquistare' or ...
         *- params.posizione : this is an empty string because user did not ask chatbot to search in specefic location
         *- location : this is null because we don't need to get user's location in this case
         */
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

    //if chatbot has access to user data from his/her Google Account...
    if (confirmationGranted && location) {


        /** RISPOSTA = CHATBOT ANSWER, and comes from 'functions.js' based on user's request
         *- params.categorie : this is the category which user asked for search from chatbot - eg: 'Taralli' or 'Ricotte'
         *- params.domande : this is the type of user's question and could be : 'dove', 'quali' or ...
         *- params.attivita : this could be 'mangiare', 'trovare', 'comprare', 'acquistare' or ...
         *- params.posizione : this could be 'nei dintorni', 'nella mia citta', 'nella mia regione' or ...
         *- location : this is user's actual location which we get form user's Google Account
         */
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