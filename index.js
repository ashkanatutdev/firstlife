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

// gestisce il massaggio di benvenuto e tutto ciò che l'utente vedrà quando inizierà a utilizzare il chatbot.
app.intent('Default Welcome Intent', conv => {
    console.log(conv.body.originalDetectIntentRequest.source);
    conv.ask('Benvenuto, sono il tuo assistente personale. Posso consigliarti dove mangiare e dove comprare prodotti tipici piemontesi. Inoltre posso darti informazioni sui luoghi in cui si producono. Basta specificare la categoria o la descrizione di un prodotto.');
});

/**
 * gestisce la richiesta dell'utente.
 * -se l'utente non specifica una posizione per la ricerca (es. 'nei dintorni' o 'nella mi città'), questo intent (main) risponde all'utente
 * -se l'utente specifica una posizione per la ricerca (es. 'nei dintorni' o 'nella mi città'), passa i parametri all'intent successivo e possiamo gestire tutto lì.
 * -(l'intent successivo potrebbe essere 'ottenere_posizione' or 'main_ottenere_cap', in base alla piattaforma che l'utente sta utilizzando)
 */
app.intent('main', conv => {

    //specifica la piattaforma che l'utente sta utilizzando per connettersi al chatbot (es. 'google' o 'dialogflow' o 'facebook')
    const source = conv.body.originalDetectIntentRequest.source;

    //parametri di conversazione tra chatbot e utente ('attivita', 'domanda', 'posizione' and 'categorie'). vengono da dialogflow
    let params = conv.parameters;
    let permissions = '';
    let context = '';

    if (params.posizione == '') {
        // l'utente non menziona "nei dintorni o nella mia citta o ..."
        // -non abbiamo bisogno 'permission' dell'utente per l'accesso sull'account Google
        // -chatbot risponde all'utente qui nell'intent "main"

        //RISPOSTA FINALE DI CHATBOT
        let RES = functions.risposta(params.categorie, params.domanda, params.attivita, '', null);
        conv.ask(RES);
    } else {
        // l'utente menziona "nei dintorni o nella mia citta o ..."
        // -dobbiamo chiedere 'permission' per accedere all'account Google dell'utente per ottenere la sua posizione
        // -passiamo i parametri all'intent successivo

        if (source == 'google') {
            // se l'utente è connesso da Google Assistant
            // -passiamo i parametri all'intent "ottenere_posizione"
            if (conv.user.verification === 'VERIFIED') {
                permissions = 'DEVICE_PRECISE_LOCATION'; // tipo di permission (nel questo caso : 'Posizione Preciso')
                context = 'Per sapere la tua posizione'; // prima parte del massaggio (possiamo gestire solo questa parte)
            } else {
                conv.close('Non sei verificato');
            }
            const options = {
                context,
                permissions,
            };

            // -chiedere 'permission' all'utente per l'accesso ai suoi dati sull'account Google
            // -la conversazione va all'intent 'ottenere_posizione'
            conv.ask(new Permission(options));

        } else {
            // se l'utente è connesso da un'altra piattaforma (non Google Assistant)
            // -se abbiamo gia il coordinate oppure CAP dell'utente chatbot risponde qui:
            conv.ask(`Risposata di chatbot ...`);
            // -se non abbiamo coordinate oppure CAP dell'utente, passiamo i parametri all'intent "main_ottenere_cap"
            // -la conversazione va all'intent 'ottenere_posizione'
        }
    }
});

// gestisce la risposta del chatbot quando l'utente menziona una posizione (es. 'nella mia citta' o 'nei dintorni')
// -quando l'utente utilizza Google Assistant
app.intent('ottenere_posizione', (conv, params, confirmationGranted) => {
    console.log(conv.body.originalDetectIntentRequest.source);
    const {location} = conv.device;
    console.log(params);

    if (confirmationGranted && location) {
        //se chatbot ha accesso ai dati dell'utente dal suo account Google...

        //RISPOSTA FINALE DI CHATBOT
        let RISPOSTA = functions.risposta(params.categorie, params.domanda, params.attivita, params.posizione, location);
        conv.ask(RISPOSTA);

    } else {
        //se l'utente non dà il permesso di accedere ai dati sul suo account Google a chatbot
        conv.close(`non sono riuscito a capire la tua posizione.`);
    }
});

// gestisce la risposta del chatbot quando l'utente menziona una posizione (es. 'nella mia citta' o 'nei dintorni').
// -quando l'utente non utilizza Google Assistant
// -cambiamo questa parte in seguito, perche non possiamo ottenere dati dell'utente dall'account Google, quando l'utente non usa Google Assistant.
// -dobbiamo ottenre coordinate oppure CAP dell'utente ma non possiamo ottenerlo dall'account Google Assistant
app.intent('main_ottenere_cap', conv => {
    // otteniamo coordinate oppure CAP dell'utente qui ...
    conv.ask(`Risposata di chatbot ...`);
});

//Eseguire l'app
const expressApp = express().use(bodyParser.json());
expressApp.post('/fulfillment', app);
expressApp.listen(port, function () {
    console.log('FirstLife is runnign on ...' + port);
});