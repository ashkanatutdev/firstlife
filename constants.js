module.exports = {
    creaCodice,
    altro,
    primaParte,
    fallBack,
    raggio
}

/**
 * il raggio intorno all'utente per il calcolo della distanza e controlla se c'è qualche 'ristorante' o 'azienda' o 'punto vendita' nel raggio di 'raggio' metro intorno all'utente o no.
 * @returns {number}
 */
function raggio(){
    return 1000;
}

/**
 * crea la prima parte della risposta del chatbot in base ai parametri della conversazione tra chatbot e l'utente
 * @param attivita --- potrebbe essere 'mangiare' o 'comprare' o... e viene da parametri di conversazione
 * @param posizione --- potrebbe essere 'dintorni' o 'citta' o 'regione' o... e viene da parametri di conversazione
 * @returns {string}
 */
function primaParte(attivita, posizione){
    let primaParte = '';
    switch (posizione){
        case 'dintorni':
            primaParte += `Nel raggio di ${raggio()} mt dalla tua posizione, `;
            if (attivita == 'comprare' || attivita == 'trovare' || attivita == 'acquistare' || attivita == 'mangiare') {
                primaParte += `puoi ${attivita}, `
            } else if (attivita == 'producono' || attivita == 'fanno' || attivita == 'confezionano' || attivita == 'vengono prodotti' || attivita == 'vengono venduti'){
                primaParte += `${attivita}, `
            }
            break;
        case 'citta':
            primaParte += `Nella tua citta, `;
            if (attivita == 'comprare' || attivita == 'trovare' || attivita == 'acquistare' || attivita == 'mangiare') {
                primaParte += `puoi ${attivita}, `
            } else if (attivita == 'producono' || attivita == 'fanno' || attivita == 'confezionano' || attivita == 'vengono prodotti' || attivita == 'vengono venduti'){
                primaParte += `${attivita}, `
            }
            break;
        case 'regione':
            primaParte += `Nella tua regione, `;
            if (attivita == 'comprare' || attivita == 'trovare' || attivita == 'acquistare' || attivita == 'mangiare') {
                primaParte += `puoi ${attivita}, `
            } else if (attivita == 'producono' || attivita == 'fanno' || attivita == 'confezionano' || attivita == 'vengono prodotti' || attivita == 'vengono venduti'){
                primaParte += `${attivita}, `
            }
            break;
        case '':
            if (attivita == 'comprare' || attivita == 'trovare' || attivita == 'acquistare' || attivita == 'mangiare') {
                primaParte += `puoi ${attivita}, `
            } else if (attivita == 'producono' || attivita == 'fanno' || attivita == 'confezionano' || attivita == 'vengono prodotti' || attivita == 'vengono venduti'){
                primaParte = `${attivita}, `
            }
            break;
    }
    return primaParte;
}

/**
 * crea la parte finale della risposta
 * @returns {string}
 */
function altro(){
    return ". voui sapere altro?";
}

/**
 * crea una risposta di fallback
 * @returns {string}
 */
function fallBack(){
    return `non ho capito bene, puoi ripetere?`;
}


/**
 * crea un codice unico per ogni categoria
 * @param categoria
 * @returns {string}
 */
function creaCodice(categoria){
    let codice = '';
    switch (categoria){
        case 'formaggi':
            codice = 'FORMAGGI';
            break;
        case 'ricotte':
            codice = 'RICOTTE';
            break;
        case 'mozzarelle':
            codice = 'MOZZARELLE';
            break;
        case 'prodotti a base di latte':
            codice = 'BASE_DI_LATTE';
            break;
        case 'provoloni':
            codice = 'PROVOLONI';
            break;
        case 'formaggi freschi':
            codice = 'FORMAGGI_FRESCHI';
            break;
        case 'formaggi stagionati':
            codice = 'FORMAGGI_STAGIONATI';
            break;
        case 'formaggi locali':
            codice = 'FORMAGGI_LOCALI';
            break;
        case 'prodotti da forno':
            codice = 'DA_FORNO';
            break;
        case 'insaccati':
            codice = 'INSACCATI';
            break;
        case 'torte salate':
            codice = 'TORTE_SALATE';
            break;
        case 'yogurt':
            codice = 'YOGURT';
            break;
        case 'latticini':
            codice = 'LATTICINI';
            break;
        case 'pasta fresca':
            codice = 'PASTA_FRESCA';
            break;
        case 'pasta fresca ripiena':
            codice = 'PASTA_FRESCA_RIPIENA';
            break;
        case 'taralli':
            codice = 'TARALLI';
            break;
        case 'pizza':
            codice = 'PIZZA';
            break;
        case 'pane':
            codice = 'PANE';
            break;
        case 'salsicce':
            codice = 'SALSICCE';
            break;
    }
    return codice;
}