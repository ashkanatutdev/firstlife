module.exports = {
    creaCodice,
    altro,
    primaParte,
    fallBack
}

/**
 * create final part of response
 * @returns {string}
 */
function altro(){
    return ". voui sapere altro?";
}

/**
 * create main part of response
 * @param attivita
 * @param posizione
 * @returns {string}
 */
function primaParte(attivita, posizione){
    let primaParte = '';
    switch (posizione){
        case 'dintorni':
            primaParte += `Nel raggio di 500 mt dalla tua posizione, `;
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
 * create fallback response
 * @returns {string}
 */
function fallBack(){
    return `non ho capito bene, puoi ripetere?`;
}


/**
 ********** WE DON'T NEED THIS PART OF CODE AND WHEN WE HAVE ACCESS TO REAL DATA WE CAN DELETE THIS PART COMPLETELY ***********
 * create a unique serial for any categoria
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