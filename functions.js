//functions

const services = require('./services');
const constants = require('./constants');

module.exports = {
    risposta
}

/**
 * raggio is radius around user for calculating distance and check if there is any 'ristorante' or 'azienda' or 'punto vendita'
 * in radius of 'raggio' meter around user or not.
 * @type {number}
 */
let raggio = 500;

/**
 * we can get user's 'coordinates' or 'city' or 'formattedAddress' or 'zipCode' from '_posizione_utente'.
 * this is private object and come from 'risposta' function.
 * @type object
 * @private
 */
let _posizione_utente = {};

/**
 * find "punti vendita" or "ristoranti" or "aziende" in radius of "raggio" around user using Google Map API.
 *** we need to modificate this function when we have access to Google Map API and real data.
 * @param posizione_prodotto --- posizione_prodotto could be coordinates of "PuntiVendita" or "Ristoranti" or "Aziende".
 * @returns {boolean} --- "true" means this location is located around the user within distance of "distance", so we can show it to user.
 */
function findDistanza(posizione_prodotto) {
    /*
     * let lng_prodotto = posizione_prodotto.lng;
     * let lat_prodotto = posizione_prodotto.lat;
     *** so we can find user's actual position using Google Map API
     *** we also have coordinates of user (_posizione_utente), so we can find actual position of user too using Google Map API
     *** so we can find distance between user and "punto vendita" or "ristorante" or "azienda" of "prodotto" Google Map API and name it "d".
     * if(d < raggio){
     *     return true,
     * } else{
     *     return false
     * }
     *** for now this function always returns "true", because we don't have access to Google Map API
     */
    console.log("Product Position: ");
    console.log(posizione_prodotto);
    console.log("User Position: ");
    console.log(_posizione_utente.coordinates);
    return true;
}


/**
 * check if "punti vendita" or "ristoranti" or "aziende" are located in user's city using Google Map API.
 *** we need to modificate this function when we have access to Google Map API and real data.
 * @param posizione_prodotto --- posizione_prodotto could be coordinates of "PuntiVendita" or "Ristoranti" or "Aziende".
 * @returns {boolean} --- "true" means this location is located in user's city, so we can show it to user.
 */
function findCitta(posizione_prodotto) {
    /*
     * let lng_prodotto = posizione_prodotto.lng;
     * let lat_prodotto = posizione_prodotto.lat;
     *** so we can find user's city using Google Map API
     * let citta = ("citta" of "punto vendita" o "ristorante" o "azienda" of prodotto).toUpperCase();
     *** we also have "citta" of user (_posizione_utente.city).
     * let uCitta = _posizione_utente.city.toUpperCase();
     *** so we can compare the cities.
     * if(citta == uCitta){
     *     return true;
     * } else{
     *     return false;
     * }
     *** for now this function always returns "true", because we don't have access to Google Map API
     */
    console.log("Product Position: ");
    console.log(posizione_prodotto);
    console.log("User Position: ");
    console.log(_posizione_utente.coordinates);;
    return true;
}

/**
 * check if "punti vendita" or "ristoranti" or "aziende" are located in user's region using Google Map API.
 *** we need to modificate this function when we have access to Google Map API and real data.
 * @param posizione_prodotto --- posizione_prodotto could be coordinates of "PuntiVendita" or "Ristoranti" or "Aziende".
 * @returns {boolean} --- "true" means this location is located in user's region, so we can show it to user.
 */
function findRegione(posizione_prodotto) {
    /*
     * let lng_prodotto = posizione_prodotto.lng;
     * let lat_prodotto = posizione_prodotto.lat;
     *** so we can find user's regione using Google Map API ??
     * let regione = ("regione" of "punto vendita" o "ristorante" o "azienda" of prodotto).toUpperCase();
     *** we also have "coordinates" of user (_posizione_utente.coordinates).
     * let uRegione = (user's "regione").toUpperCase(); (perhaps we can get user's regione using coordinates of user's position)
     *** so we can compare the regions.
     * if(regione == uRegione){
     *     return true;
     * } else{
     *     return false;
     * }
     *** for now this function always returns "true", because we don't have access to Google Map API
     */
    console.log("Product Position: ");
    console.log(posizione_prodotto);
    console.log("User Position: ");
    console.log(_posizione_utente.coordinates);
    return true;
}

/**
 *********** WE DON'T NEED TO CHANGE THIS PART OF CODE DIRECTLY, IF WE WANT TO MAKE SOME CHANGES IN RESPONSE
 *********** WE CAN CHANGE IT FROM "constants.js" FILE.
 *
 * create response of chatbot
 * @param categoria --- could be "formaggi" o "ricotte" o ...
 * @param domanda --- could be "dove (dove o in quale posto)" o "quali"
 * @param attivita --- could be "mangiare", "comprare", "trovare", ...
 * @param posizione --- could be "dintorni (nei dintorni o intorno a me o ...)", "citta" o "regione"
 * @param posizione_utente --- we can get it from user's Google Account (only when user uses Google Assistant platform)
 * @returns {string} --- chatbot response
 */
function risposta(categoria, domanda, attivita, posizione, posizione_utente) {
    _posizione_utente = posizione_utente;
    let CODICE_DI_CATEGORIA = constants.creaCodice(categoria);
    let PRODOTTI = services.findProdotti(CODICE_DI_CATEGORIA);
    let RISPOSTA = ``;
    if (domanda == 'quali') {
        if (attivita == 'comprare' || attivita == 'trovare' || attivita == 'acquistare') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else if (attivita == 'mangiare') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].ristoranti.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].ristoranti.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].ristoranti.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else if (attivita == 'producono' || attivita == 'fanno' || attivita == 'confezionano' || attivita == 'vengono prodotti') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].aziende.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].aziende.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].aziende.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else if (attivita == 'vengono venduti') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else {
            RISPOSTA += constants.fallBack();
        }
    } else if (domanda == 'dove') {
        if (attivita == 'comprare' || attivita == 'trovare' || attivita == 'acquistare') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico}`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico} e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else if (attivita == 'mangiare') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].ristoranti.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].ristoranti.descrizione} con indirizzo: ${PRODOTTI[i].ristoranti.indirizzo} e numero di telefono: ${PRODOTTI[i].ristoranti.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].ristoranti.descrizione} con indirizzo: ${PRODOTTI[i].ristoranti.indirizzo} e numero di telefono: ${PRODOTTI[i].ristoranti.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].ristoranti.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].ristoranti.descrizione} con indirizzo: ${PRODOTTI[i].ristoranti.indirizzo} e numero di telefono: ${PRODOTTI[i].ristoranti.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].ristoranti.descrizione} con indirizzo: ${PRODOTTI[i].ristoranti.indirizzo} e numero di telefono: ${PRODOTTI[i].ristoranti.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].ristoranti.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].ristoranti.descrizione} con indirizzo: ${PRODOTTI[i].ristoranti.indirizzo} e numero di telefono: ${PRODOTTI[i].ristoranti.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].ristoranti.descrizione} con indirizzo: ${PRODOTTI[i].ristoranti.indirizzo} e numero di telefono: ${PRODOTTI[i].ristoranti.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].ristoranti.descrizione} con indirizzo: ${PRODOTTI[i].ristoranti.indirizzo} e numero di telefono: ${PRODOTTI[i].ristoranti.contatto_telefonico}`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].ristoranti.descrizione} con indirizzo: ${PRODOTTI[i].ristoranti.indirizzo} e numero di telefono: ${PRODOTTI[i].ristoranti.contatto_telefonico} e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else if (attivita == 'vengono prodotti' || attivita == 'producono' || attivita == 'fanno' || attivita == 'confezionano') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].aziende.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", in ${PRODOTTI[i].aziende.descrizione} con indirizzo: ${PRODOTTI[i].aziende.indirizzo} e numero di telefono: ${PRODOTTI[i].aziende.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", in ${PRODOTTI[i].aziende.descrizione} con indirizzo: ${PRODOTTI[i].aziende.indirizzo} e numero di telefono: ${PRODOTTI[i].aziende.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].aziende.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", in ${PRODOTTI[i].aziende.descrizione} con indirizzo: ${PRODOTTI[i].aziende.indirizzo} e numero di telefono: ${PRODOTTI[i].aziende.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", in ${PRODOTTI[i].aziende.descrizione} con indirizzo: ${PRODOTTI[i].aziende.indirizzo} e numero di telefono: ${PRODOTTI[i].aziende.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].aziende.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", in ${PRODOTTI[i].aziende.descrizione} con indirizzo: ${PRODOTTI[i].aziende.indirizzo} e numero di telefono: ${PRODOTTI[i].aziende.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", in ${PRODOTTI[i].aziende.descrizione} con indirizzo: ${PRODOTTI[i].aziende.indirizzo} e numero di telefono: ${PRODOTTI[i].aziende.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}", in ${PRODOTTI[i].aziende.descrizione} con indirizzo: ${PRODOTTI[i].aziende.indirizzo} e numero di telefono: ${PRODOTTI[i].aziende.contatto_telefonico}`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}", in ${PRODOTTI[i].aziende.descrizione} con indirizzo: ${PRODOTTI[i].aziende.indirizzo} e numero di telefono: ${PRODOTTI[i].aziende.contatto_telefonico} e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else if (attivita == 'vengono venduti') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico}`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico} e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico}`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}", nella ${PRODOTTI[i].punti_vendita.descrizione}, con indirizzo: ${PRODOTTI[i].punti_vendita.indirizzo} e numero di telefono: ${PRODOTTI[i].punti_vendita.contatto_telefonico} e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else {
            RISPOSTA += constants.fallBack();
        }
    } else {
        if (attivita == 'comprare' || attivita == 'trovare' || attivita == 'acquistare') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].punti_vendita.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else if (attivita == 'mangiare') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findDistanza(PRODOTTI[i].ristoranti.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'citta') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findCitta(PRODOTTI[i].ristoranti.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == 'regione') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (findRegione(PRODOTTI[i].ristoranti.posizione)) {
                        if (i == PRODOTTI.length - 1) {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                        } else {
                            RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                        }
                    }
                }
                RISPOSTA += constants.altro();
            } else if (posizione == '') {
                RISPOSTA += constants.primaParte(attivita,posizione);
                for (let i = 0; i < PRODOTTI.length; i++) {
                    if (i == PRODOTTI.length - 1) {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}"`;
                    } else {
                        RISPOSTA += `"${PRODOTTI[i].descrizione}" e `;
                    }
                }
                RISPOSTA += constants.altro();
            }
        } else {
            RISPOSTA += constants.fallBack();
        }
    }
    return RISPOSTA;
}

// let r = risposta('pizza', 'dove', 'mangiare', 'regione', '');
// console.log(r);