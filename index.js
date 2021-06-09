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
 * gestisce il massaggio di benvenuto e tutto ciò che l'utente vedrà quando inizierà a utilizzare il chatbot
 */
app.intent('Default Welcome Intent', conv => {
    console.log(conv.body.originalDetectIntentRequest.source);
    conv.ask('Benvenuto, sono il tuo assistente personale. Posso consigliarti dove mangiare e dove comprare prodotti tipici piemontesi. Inoltre posso darti informazioni sui luoghi in cui si producono. Basta specificare la categoria o la descrizione di un prodotto.');
});

/**
 * quando l'utente chiede al chatbot di cercare qualcosa l'intent "main" viene attivato e gestisce la richiesta dell'utente,
 * se l'utente non chiede al chatbot di cercare una categoria in una posizione specifica come "nei dintorni" o "nella mia città" o
 * "nella mia regione" o ..., quindi il chatbot non ha bisogno di ottenere la posizione dell'utente, quindi risponde alla
 * richiesta dell'utente all'interno dell'intent "main", ma se l'utente chiede al chatbot di cercare in una posizione
 * specifica e menziona "nei dintorni" o "nella mia città" o ... , il chatbot deve ottenere la posizione dell'utente,
 * quindi passa i parametri all'intent successivo (si chiama "ottenere_posizione") e gestisce tutto lì.
 */
app.intent('main', conv => {

    //specifica la piattaforma che l'utente sta utilizzando per connettersi al chatbot (es. 'google' o 'dialogflow' o 'facebook')
    const source = conv.body.originalDetectIntentRequest.source;

    //parametri di conversazione tra chatbot e utente ('attivita', 'domanda', 'posizione' and 'categorie')
    let params = conv.parameters;

    //tipo di permission (nel caso in cui dobbiamo ottenere la posizione dell'utente dall'account google)
    let permissions = '';

    let context = '';

    if (params.posizione == '') {
        //l'utente non ha menzionato "nei dintorni o nella mia citta o ..." quindi chatbot mostra tutte le posizioni all'utente

        /** RES = RISPOSTA FINALE DI CHATBOT e viene da 'functions.js' in base alla richiesta dell'utente
         *- params.categorie : la categoria che l'utente ha chiesto per la ricerca dal chatbot - es. 'Taralli' o 'Ricotte' o ...
         *- params.domande : il tipo di domanda dell'utente e potrebbe essere: 'dove', 'quali' o...
         *- params.attivita : questo potrebbe essere 'mangiare', 'trovare', 'comprare', 'acquistare' o...
         *- params.posizione : è una stringa vuota perché in questo caso l'utente non ha chiesto al chatbot di cercare in una posizione specifica
         *- location : è null perché non abbiamo bisogno di ottenere la posizione dell'utente in questo caso
         */
        let RES = functions.risposta(params.categorie, params.domanda, params.attivita, '', null);
        conv.ask(RES);

    } else {
        //l'utente ha menzionato "nei dintorni o nella mia citta o ..." quindi chiediamo la sua posizione dal suo account Google

        if (source == 'google') {
            //se l'utente è connesso da Google Assistant
            if (conv.user.verification === 'VERIFIED') {
                permissions = 'DEVICE_PRECISE_LOCATION';
                context = 'Per sapere la tua posizione'; //prima parte del massaggio (possiamo gestire solo questa parte)
            } else {
                conv.close('Non sei verificato');
            }
            const options = {
                context,
                permissions,
            };

            //chiedere il permesso all'utente per l'accesso ai suoi dati sull'account Google
            conv.ask(new Permission(options));

        //se l'utente è connesso da un'altra piattaforma (non Google Assistant) --- cambiamo questa parte in seguito ---
        } else {
            let zipCode = conv.contexts.get('main-followup').parameters.zipCode || '';
            if (zipCode == '') {
                conv.ask('mi puoi dare il codice postale della tua posizione?');
            } else {
                console.log(zipCode);
                conv.ask(`Risposata di chatbot ...`);
            }
        }
    }
});

//when user uses Google Assistant
app.intent('ottenere_posizione', (conv, params, confirmationGranted) => {
    console.log(conv.body.originalDetectIntentRequest.source);
    const {location} = conv.device;
    console.log(params);

    if (confirmationGranted && location) {
        //se chatbot ha accesso ai dati dell'utente dal suo account Google...

        /** RISPOSTA = RISPOSTA FINALE DI CHATBOT e viene da 'functions.js' in base alla richiesta dell'utente
         *- params.categorie : la categoria che l'utente ha chiesto per la ricerca dal chatbot - es. 'Taralli' o 'Ricotte' o ...
         *- params.domande : il tipo di domanda dell'utente e potrebbe essere: 'dove', 'quali' o...
         *- params.attivita : questo potrebbe essere 'mangiare', 'trovare', 'comprare', 'acquistare' o...
         *- params.posizione : potrebbe essere 'nei dintorni', 'nella mia citta', 'nella mia regione' o...
         *- location : questa è la posizione dell'utente che otteniamo dall'account Google dell'utente
         */
        let RISPOSTA = functions.risposta(params.categorie, params.domanda, params.attivita, params.posizione, location);
        console.log(RISPOSTA);
        conv.ask(RISPOSTA);

    } else {
        //se l'utente non dà il permesso di accedere ai dati sul suo account Google a chatbot
        conv.close(`non sono riuscito a capire la tua posizione.`);
    }
});

//se l'utente è connesso da un'altra piattaforma (non Google Assistant) --- cambiamo questa parte in seguito ---
app.intent('main_ottenere_cap', conv => {
    console.log(conv.body.originalDetectIntentRequest.source);
    let params = conv.parameters;
    let zipCode = params.zipCode;
    console.log(zipCode);
    conv.ask(`Risposata di chatbot ...`);
});
//end intent handlers

//Esegui l'app
const expressApp = express().use(bodyParser.json());
expressApp.post('/fulfillment', app);
expressApp.listen(port, function () {
    console.log('FirstLife is runnign on ...' + port);
});