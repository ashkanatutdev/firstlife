//functions

const services = require('./services');
const constants = require('./constants');

module.exports = {
    risposta
}

/**
 * il raggio intorno all'utente per il calcolo della distanza e controlla se c'è qualche 'ristorante' o 'azienda' o 'punto vendita' nel raggio di 'raggio' metro intorno all'utente o no.
 * @type {number}
 */
let raggio = 500;

/**
 * possiamo ottenere le 'coordinate' o 'city' o 'formattedAddress' o 'zipCode' dell'utente da '_posizione_utente'.
 * - viene dall'accound Google dell'utente.
 * @type object
 * @private
 */
let _posizione_utente = {};

/**
 * trova "punti vendita" o "ristoranti" o "aziende" nel raggio di "raggio" intorno all'utente utilizzando Google Map API.
 *** dobbiamo modificare questa funzione quando abbiamo accesso all'API di Google Map e ai dati reali.
 * @param posizione_prodotto --- posizione_prodotto potrebbero essere le coordinate di "PuntoVendita" o "Ristoranti" o "Aziende" per il prodotto specifico.
 * @returns {boolean} --- "true" significa che questa "PuntoVendita" o "Ristoranti" o "Aziende" si trova intorno all'utente entro la distanza di "raggio", quindi possiamo mostrarla all'utente.
 */
function findDistanza(posizione_prodotto) {
    /*
     * let lng_prodotto = posizione_prodotto.lng;
     * let lat_prodotto = posizione_prodotto.lat;
     *** così possiamo trovare la posizione di 'ristorante' o 'punti_vendita' o 'azienda', utilizzando Google Map API
     *** abbiamo anche le coordinate dell'utente (viene da '_posizione_utente'), quindi possiamo trovare anche la posizione dell'utente utilizzando Google Map API
     *** quindi possiamo trovare la distanza tra l'utente e "punto vendita" o "ristorante" o "azienda" di "prodotto", utilizzando Google Map API e nominarlo "d".
     * if(d < raggio){
     *     return true,
     * } else{
     *     return false
     * }
     *** per ora questa funzione restituisce sempre "true", perché non abbiamo accesso all'API di Google Map
     */
    console.log("Product Position: ");
    console.log(posizione_prodotto);
    console.log("User Position: ");
    console.log(_posizione_utente.coordinates);
    console.log(_posizione_utente.zipCode);
    return true;
}


/**
 * verifica se "punti vendita" o "ristoranti" o "aziende" si trovano nella città dell'utente utilizzando l'API di Google Map.
 *** dobbiamo modificare questa funzione quando abbiamo accesso all'API di Google Map e ai dati reali.
 * @param posizione_prodotto --- posizione_prodotto potrebbero essere le coordinate di "PuntoVendita" o "Ristoranti" o "Aziende" per il prodotto specifico.
 * @returns {boolean} --- "true" significa che questa "PuntoVendita" o "Ristoranti" o "Aziende" si trova nella città dell'utente, quindi possiamo mostrarla all'utente.
 */
function findCitta(posizione_prodotto) {
    /*
     * let lng_prodotto = posizione_prodotto.lng;
     * let lat_prodotto = posizione_prodotto.lat;
     *** possiamo trovare città di 'ristorante' o 'punti_vendita' o 'azienda' utilizzando Google Map API
     * let citta = ("citta" of "punto vendita" o "ristorante" o "azienda" of prodotto).toUpperCase();
     *** abbiamo anche "città" di utente (_posizione_utente.city).
     * let uCitta = _posizione_utente.city.toUpperCase();
     *** così possiamo confrontare le città.
     * if(citta == uCitta){
     *     return true;
     * } else{
     *     return false;
     * }
     *** per ora questa funzione restituisce sempre "true", perché non abbiamo accesso all'API di Google Map
     */
    console.log("Product Position: ");
    console.log(posizione_prodotto);
    console.log("User Position: ");
    console.log(_posizione_utente.coordinates);
    console.log(_posizione_utente.zipCode);
    return true;
}

/**
 * verificare se "punti vendita" o "ristoranti" o "aziende" si trovano nella regione dell'utente utilizzando l'API di Google Map.
 *** dobbiamo modificare questa funzione quando abbiamo accesso all'API di Google Map e ai dati reali.
 * @param posizione_prodotto --- posizione_prodotto potrebbero essere le coordinate di "PuntoVendita" o "Ristoranti" o "Aziende" per il prodotto specifico.
 * @returns {boolean} --- "true" significa che questa "PuntoVendita" o "Ristoranti" o "Aziende" si trova nella regione dell'utente, quindi possiamo mostrarla all'utente.
 */
function findRegione(posizione_prodotto) {
    /*
     * let lng_prodotto = posizione_prodotto.lng;
     * let lat_prodotto = posizione_prodotto.lat;
     *** quindi possiamo trovare la regione de "punto vendita" o "ristorante" o "azienda" del prodotto utilizzando l'API di Google Map ??
     * let regione = ("regione" di "punto vendita" o "ristorante" o "azienda" of prodotto).toUpperCase();
     *** abbiamo anche le "coordinate" dell'utente (_posizione_utente.coordinates).
     * let uRegione = (user's "regione").toUpperCase();
     *** così possiamo confrontare le regioni.
     * if(regione == uRegione){
     *     return true;
     * } else{
     *     return false;
     * }
     *** per ora questa funzione restituisce sempre "true", perché non abbiamo accesso all'API di Google Map
     */
    console.log("Product Position: ");
    console.log(posizione_prodotto);
    console.log("User Position: ");
    console.log(_posizione_utente.coordinates);
    console.log(_posizione_utente.zipCode);
    return true;
}

/**
 *********** NON ABBIAMO BISOGNO DI MODIFICARE DIRETTAMENTE QUESTA PARTE DEL CODICE, SE VOGLIAMO APPORTARE ALCUNE MODIFICHE IN RISPOSTA
 *********** POSSIAMO CAMBIARLO DAL FILE "constants.js".
 *
 * crea risposta di chatbot
 * @param categoria --- potrebbe essere "formaggi" o "ricotte" o ... e viene da 'parameters' della conversazione del chatbot in base alla richiesta dell'utente
 * @param domanda --- potrebbe essere "dove (o "in quale posto")" o "quali" e viene da 'parameters' della conversazione del chatbot in base alla richiesta dell'utente
 * @param attivita --- potrebbe essere "mangiare", "comprare", "trovare", ... e viene da 'parameters' della conversazione del chatbot in base alla richiesta dell'utente
 * @param posizione --- potrebbe essere "dintorni ("nei dintorni" o "intorno a me" o ...)", "citta" o "regione" e viene da 'parameters' della conversazione del chatbot in base alla richiesta dell'utente (potrebbe anche essere una stringa vuota)
 * @param posizione_utente --- possiamo ottenerlo dall'account Google dell'utente (solo quando l'utente utilizza la piattaforma Google Assistant ed anche potrebbe essere "null")
 * @returns {string} --- risposta di chatbot
 */
function risposta(categoria, domanda, attivita, posizione, posizione_utente) {
    _posizione_utente = posizione_utente;
    let CODICE_DI_CATEGORIA = constants.creaCodice(categoria);
    let PRODOTTI = services.findProdotti(CODICE_DI_CATEGORIA);
    let RISPOSTA = ``;
    if (domanda == 'quali') {
        if (attivita == 'comprare' || attivita == 'trovare' || attivita == 'acquistare') {
            if (posizione == 'dintorni') {
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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
                RISPOSTA += constants.primaParte(attivita, posizione);
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


//--- solo per prova ---
let r = risposta('ricotte', 'dove', 'mangiare', 'regione', '');
console.log(r);