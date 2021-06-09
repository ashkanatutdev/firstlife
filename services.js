// services
module.exports = {
    findProdotti
}

const constants = require('./constants')

/**
 * Restituisce l'elenco dei prodotti specificando:
 * Per ogni prodotto viene specificato:
 * - codice (es. FORMAGGIO_1)
 * - descrizione (es. Fiore Sardo)
 * - codice categoria di appartenenza (es. FORMAGGI)
 * - un Object per punti vendita del quel prodotto
 * - un Object per ristoranti del quel prodotto
 * - un Object per aziende del quel prodotto
 */
function findProdotti(categoria) {
    let prodotti = null;
    if (constants.creaCodice(categoria) == "FORMAGGI") {
        prodotti = [{
            codice: "FORMAGGIO_1",
            descrizione: "Fiore Sardo",
            categoria: "FORMAGGI",
            aziende: findAziende("FORMAGGI")[0],
            punti_vendita: findPuntiVendita("FORMAGGI")[0],
            ristoranti: findRistoranti("FORMAGGI")[0]
        }, {
            codice: "FORMAGGIO_2",
            descrizione: "Asiago",
            categoria: "FORMAGGI",
            aziende: findAziende("FORMAGGI")[0],
            punti_vendita: findPuntiVendita("FORMAGGI")[0],
            ristoranti: findRistoranti("FORMAGGI")[0]
        }];
    } else if (constants.creaCodice(categoria) == "RICOTTE") {
        prodotti = [{
            codice: "RICOTTA_1",
            descrizione: "Ricotta di Capra",
            categoria: "Ricotte",
            aziende: findAziende("RICOTTE")[0],
            punti_vendita: findPuntiVendita("RICOTTE")[0],
            ristoranti: findRistoranti("RICOTTE")[0]
        }, {
            codice: "RICOTTA_2",
            descrizione: "Ricotta di Pecora",
            categoria: "Ricotte",
            aziende: findAziende("RICOTTE")[0],
            punti_vendita: findPuntiVendita("RICOTTE")[0],
            ristoranti: findRistoranti("RICOTTE")[0]
        }];
    } else if (constants.creaCodice(categoria) == "MOZZARELLE") {
        prodotti = [{
            codice: "MOZZARELLA_1",
            descrizione: "Mozzarella di Bufala",
            categoria: "Mozzarelle",
            aziende: findAziende("MOZZARELLE")[0],
            punti_vendita: findPuntiVendita("MOZZARELLE")[0],
            ristoranti: findRistoranti("MOZZARELLE")[0]
        }, {
            codice: "MOZZARELLA_2",
            descrizione: "Mozzarella affumicata",
            categoria: "Mozzarelle",
            aziende: findAziende("MOZZARELLE")[0],
            punti_vendita: findPuntiVendita("MOZZARELLE")[0],
            ristoranti: findRistoranti("MOZZARELLE")[0]
        }];
    } else if (constants.creaCodice(categoria) == "FORMAGGI_LOCALI") {
        prodotti = [{
            codice: "FORMAGGI_LOCALI_1",
            descrizione: "Formaggio locali 1",
            categoria: "Formaggi locali",
            aziende: findAziende("FORMAGGI_LOCALI")[0],
            punti_vendita: findPuntiVendita("FORMAGGI_LOCALI")[0],
            ristoranti: findRistoranti("FORMAGGI_LOCALI")[0]
        }, {
            codice: "FORMAGGI_LOCALI_2",
            descrizione: "Formaggio locali 2",
            categoria: "Formaggi locali",
            aziende: findAziende("FORMAGGI_LOCALI")[0],
            punti_vendita: findPuntiVendita("FORMAGGI_LOCALI")[0],
            ristoranti: findRistoranti("FORMAGGI_LOCALI")[0]
        }];
    } else if (constants.creaCodice(categoria) == "FORMAGGI_STAGIONATI") {
        prodotti = [{
            codice: "FORMAGGI_STAGIONATI_1",
            descrizione: "Grana Padano",
            categoria: "Formaggi stagionati",
            aziende: findAziende("FORMAGGI_STAGIONATI")[0],
            punti_vendita: findPuntiVendita("FORMAGGI_STAGIONATI")[0],
            ristoranti: findRistoranti("FORMAGGI_STAGIONATI")[0]
        }, {
            codice: "FORMAGGI_STAGIONATI_2",
            descrizione: "Parmigiano Reggiano",
            categoria: "Formaggi stagionati",
            aziende: findAziende("FORMAGGI_STAGIONATI")[0],
            punti_vendita: findPuntiVendita("FORMAGGI_STAGIONATI")[0],
            ristoranti: findRistoranti("FORMAGGI_STAGIONATI")[0]
        }];
    } else if (constants.creaCodice(categoria) == "FORMAGGI_FRESCHI") {
        prodotti = [{
            codice: "FORMAGGI_FRESCHI_1",
            descrizione: "Robiola",
            categoria: "Formaggi freschi",
            aziende: findAziende("FORMAGGI_FRESCHI")[0],
            punti_vendita: findPuntiVendita("FORMAGGI_FRESCHI")[0],
            ristoranti: findRistoranti("FORMAGGI_FRESCHI")[0]
        }, {
            codice: "FORMAGGI_FRESCHI_2",
            descrizione: "Stracchino",
            categoria: "Formaggi freschi",
            aziende: findAziende("FORMAGGI_FRESCHI")[0],
            punti_vendita: findPuntiVendita("FORMAGGI_FRESCHI")[0],
            ristoranti: findRistoranti("FORMAGGI_FRESCHI")[0]
        }];
    } else if (constants.creaCodice(categoria) == "BASE_DI_LATTE") {
        prodotti = [{
            codice: "PRODOTTO_A_BASE_DI_LATTE_1",
            descrizione: "Latte Integrata",
            categoria: "Prodotti a base di latte",
            aziende: findAziende("BASE_DI_LATTE")[0],
            punti_vendita: findPuntiVendita("BASE_DI_LATTE")[0],
            ristoranti: findRistoranti("BASE_DI_LATTE")[0]
        }, {
            codice: "PRODOTTO_A_BASE_DI_LATTE_2",
            descrizione: "Latte Crudo",
            categoria: "Prodotti a base di latte",
            aziende: findAziende("BASE_DI_LATTE")[0],
            punti_vendita: findPuntiVendita("BASE_DI_LATTE")[0],
            ristoranti: findRistoranti("BASE_DI_LATTE")[0]
        }];
    } else if (constants.creaCodice(categoria) == "PROVOLONI") {
        prodotti = [{
            codice: "PROVOLONE_1",
            descrizione: "Provolone Dolce",
            categoria: "Provoloni",
            aziende: findAziende("PROVOLONI")[0],
            punti_vendita: findPuntiVendita("PROVOLONI")[0],
            ristoranti: findRistoranti("PROVOLONI")[0]
        }, {
            codice: "PROVOLONE_2",
            descrizione: "Provolone Piccante",
            categoria: "Provoloni",
            aziende: findAziende("PROVOLONI")[0],
            punti_vendita: findPuntiVendita("PROVOLONI")[0],
            ristoranti: findRistoranti("PROVOLONI")[0]
        }];
    } else if (constants.creaCodice(categoria) == "DA_FORNO") {
        prodotti = [{
            codice: "PRODOTTO_DA_FORNO_1",
            descrizione: "Biscotti",
            categoria: "Prodotti da forno",
            aziende: findAziende("DA_FORNO")[0],
            punti_vendita: findPuntiVendita("DA_FORNO")[0],
            ristoranti: findRistoranti("DA_FORNO")[0]
        }, {
            codice: "PRODOTTO_DA_FORNO_2",
            descrizione: "Savoiardi",
            categoria: "Prodotti da forno",
            aziende: findAziende("DA_FORNO")[0],
            punti_vendita: findPuntiVendita("DA_FORNO")[0],
            ristoranti: findRistoranti("DA_FORNO")[0]
        }];
    } else if (constants.creaCodice(categoria) == "INSACCATI") {
        prodotti = [{
            codice: "INSACCATI_1",
            descrizione: "Wrustel",
            categoria: "Insaccati",
            aziende: findAziende("INSACCATI")[0],
            punti_vendita: findPuntiVendita("INSACCATI")[0],
            ristoranti: findRistoranti("INSACCATI")[0]
        }, {
            codice: "INSACCATI_2",
            descrizione: "Salumi cotti",
            categoria: "Insaccati",
            aziende: findAziende("INSACCATI")[0],
            punti_vendita: findPuntiVendita("INSACCATI")[0],
            ristoranti: findRistoranti("INSACCATI")[0]
        }];
    } else if (constants.creaCodice(categoria) == "TORTE_SALATE") {
        prodotti = [{
            codice: "TORTE_SALATE_1",
            descrizione: "Torta Salata alla Zucca",
            categoria: "Torte salate",
            aziende: findAziende("TORTE_SALATE")[0],
            punti_vendita: findPuntiVendita("TORTE_SALATE")[0],
            ristoranti: findRistoranti("TORTE_SALATE")[0]
        }, {
            codice: "TORTE_SALATE_2",
            descrizione: "Torta Salata Salvacena",
            categoria: "Torte salate",
            aziende: findAziende("TORTE_SALATE")[0],
            punti_vendita: findPuntiVendita("TORTE_SALATE")[0],
            ristoranti: findRistoranti("TORTE_SALATE")[0]
        }];
    } else if (constants.creaCodice(categoria) == "YOGURT") {
        prodotti = [{
            codice: "YOGURT_1",
            descrizione: "Yogurt di Soia",
            categoria: "Yogurt",
            aziende: findAziende("YOGURT")[0],
            punti_vendita: findPuntiVendita("YOGURT")[0],
            ristoranti: findRistoranti("YOGURT")[0]
        }, {
            codice: "YOGURT_2",
            descrizione: "Yogurt Greco",
            categoria: "Yogurt",
            aziende: findAziende("YOGURT")[0],
            punti_vendita: findPuntiVendita("YOGURT")[0],
            ristoranti: findRistoranti("YOGURT")[0]
        }];
    } else if (constants.creaCodice(categoria) == "LATTICINI") {
        prodotti = [{
            codice: "LATTICINI_1",
            descrizione: "Burro",
            categoria: "Latticini",
            aziende: findAziende("LATTICINI")[0],
            punti_vendita: findPuntiVendita("LATTICINI")[0],
            ristoranti: findRistoranti("LATTICINI")[0]
        }, {
            codice: "LATTICINI_2",
            descrizione: "Panna",
            categoria: "Latticini",
            aziende: findAziende("LATTICINI")[0],
            punti_vendita: findPuntiVendita("LATTICINI")[0],
            ristoranti: findRistoranti("LATTICINI")[0]
        }];
    } else if (constants.creaCodice(categoria) == "PASTA_FRESCA") {
        prodotti = [{
            codice: "PASTA_FRESCA_1",
            descrizione: "Tagliatelle",
            categoria: "Pasta fresca",
            aziende: findAziende("PASTA_FRESCA")[0],
            punti_vendita: findPuntiVendita("PASTA_FRESCA")[0],
            ristoranti: findRistoranti("PASTA_FRESCA")[0]
        }, {
            codice: "PASTA_FRESCA_2",
            descrizione: "Orecchiette",
            categoria: "Pasta fresca",
            aziende: findAziende("PASTA_FRESCA")[0],
            punti_vendita: findPuntiVendita("PASTA_FRESCA")[0],
            ristoranti: findRistoranti("PASTA_FRESCA")[0]
        }];
    } else if (constants.creaCodice(categoria) == "PASTA_FRESCA_RIPIENA") {
        prodotti = [{
            codice: "PASTA_FRESCA_RIPIENA_1",
            descrizione: "Culurgiones",
            categoria: "Pasta fresca ripiena",
            aziende: findAziende("PASTA_FRESCA_RIPIENA")[0],
            punti_vendita: findPuntiVendita("PASTA_FRESCA_RIPIENA")[0],
            ristoranti: findRistoranti("PASTA_FRESCA_RIPIENA")[0]
        }, {
            codice: "PASTA_FRESCA_RIPIENA_2",
            descrizione: "Cappellacci",
            categoria: "Pasta fresca ripiena",
            aziende: findAziende("PASTA_FRESCA_RIPIENA")[0],
            punti_vendita: findPuntiVendita("PASTA_FRESCA_RIPIENA")[0],
            ristoranti: findRistoranti("PASTA_FRESCA_RIPIENA")[0]
        }];
    } else if (constants.creaCodice(categoria) == "TARALLI") {
        prodotti = [{
            codice: "TARALLI_1",
            descrizione: "Tarallini al Peperoncino",
            categoria: "Taralli",
            aziende: findAziende("TARALLI")[0],
            punti_vendita: findPuntiVendita("TARALLI")[0],
            ristoranti: findRistoranti("TARALLI")[0]
        }, {
            codice: "TARALLI_2",
            descrizione: "Taralli Bianchi",
            categoria: "Taralli",
            aziende: findAziende("TARALLI")[0],
            punti_vendita: findPuntiVendita("TARALLI")[0],
            ristoranti: findRistoranti("TARALLI")[0]
        }];
    } else if (constants.creaCodice(categoria) == "PIZZA") {
        prodotti = [{
            codice: "PIZZA_1",
            descrizione: "Pizza Quattro Formaggi",
            categoria: "Pizza",
            aziende: findAziende("PIZZA")[0],
            punti_vendita: findPuntiVendita("PIZZA")[0],
            ristoranti: findRistoranti("PIZZA")[0]
        }, {
            codice: "PIZZA_2",
            descrizione: "Pizza Margherita",
            categoria: "Pizza",
            aziende: findAziende("PIZZA")[0],
            punti_vendita: findPuntiVendita("PIZZA")[0],
            ristoranti: findRistoranti("PIZZA")[0]
        }];
    } else if (constants.creaCodice(categoria) == "PANE") {
        prodotti = [{
            codice: "PANE_1",
            descrizione: "Pane Ciabatta",
            categoria: "Pane",
            aziende: findAziende("PANE")[0],
            punti_vendita: findPuntiVendita("PANE")[0],
            ristoranti: findRistoranti("PANE")[0]
        }, {
            codice: "PANE_2",
            descrizione: "Pane Toscano",
            categoria: "Pane",
            aziende: findAziende("PANE")[0],
            punti_vendita: findPuntiVendita("PANE")[0],
            ristoranti: findRistoranti("PANE")[0]
        }];
    } else if (constants.creaCodice(categoria) == "SALSICCE") {
        prodotti = [{
            codice: "SALSICCE_1",
            descrizione: "Salsiccia Piccante",
            categoria: "Salsicce",
            aziende: findAziende("SALSICCE")[0],
            punti_vendita: findPuntiVendita("SALSICCE")[0],
            ristoranti: findRistoranti("SALSICCE")[0]
        }, {
            codice: "SALSICCE_2",
            descrizione: "Salsiccia sott'olio",
            categoria: "Salsiccie",
            aziende: findAziende("SALSICCE")[0],
            punti_vendita: findPuntiVendita("SALSICCE")[0],
            ristoranti: findRistoranti("SALSICCE")[0]
        }];
    }
    return prodotti;
}

/**
 * Per ogni punto vendita viene specificato:
 * - codice (es. PUNTO_VENDITA_1)
 * - descrizione (es. Punto vendita 1)
 * - indirizzo (es. Corso Torino, 118, 10056 Oulx TO)
 * - contatto_telefonico (es. +390122833800)
 * - posizione (lat, lng)
 */
function findPuntiVendita(categoria) {
    let puntiVendita = null;
    if(categoria == 'FORMAGGI'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_1",
            descrizione: "Punto vendita 1",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'RICOTTE'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_2",
            descrizione: "Punto vendita 2",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'MOZZARELLE'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_3",
            descrizione: "Punto vendita 3",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'FORMAGGI_LOCALI'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_4",
            descrizione: "Punto vendita 4",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'FORMAGGI_STAGIONATI'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_5",
            descrizione: "Punto vendita 5",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'FORMAGGI_FRESCHI'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_6",
            descrizione: "Punto vendita 6",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'BASE_DI_LATTE'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_7",
            descrizione: "Punto vendita 7",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PROVOLONI'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_8",
            descrizione: "Punto vendita 8",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'DA_FORNO'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_9",
            descrizione: "Punto vendita 9",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'INSACCATI'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_10",
            descrizione: "Punto vendita 10",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'TARALLI'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_11",
            descrizione: "Punto vendita 11",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'TORTE_SALATE'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_12",
            descrizione: "Punto vendita 12",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'YOGURT'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_13",
            descrizione: "Punto vendita 13",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'LATTICINI'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_14",
            descrizione: "Punto vendita 14",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PASTA_FRESCA'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_15",
            descrizione: "Punto vendita 15",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PASTA_FRESCA_RIPIENA'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_16",
            descrizione: "Punto vendita 16",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PIZZA'){
        puntiVendita = [{
            codice: "PIZZERIA_17",
            descrizione: "Pizzeria 17",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PANE'){
        puntiVendita = [{
            codice: "PANETTERIA_18",
            descrizione: "Panetteria 18",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'SALSICCE'){
        puntiVendita = [{
            codice: "PUNTO_VENDITA_19",
            descrizione: "Punto vendita 19",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    }
    return puntiVendita;
}

/**
 * Per ogni ristorante viene specificato:
 * - codice (es. RISTORANTE_1)
 * - descrizione (es. Ristorante 1)
 * - indirizzo (es. Corso Torino, 118, 10056 Oulx TO)
 * - contatto_telefonico (es. +390122833800)
 * - posizione (lat, lng)
 */
function findRistoranti(categoria) {
    let ristoranti = null;
    if(categoria == 'FORMAGGI'){
        ristoranti = [{
            codice: "RISTORANTE_1",
            descrizione: "Ristorante 1",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'RICOTTE'){
        ristoranti = [{
            codice: "RISTORANTE_2",
            descrizione: "Ristorante 2",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'MOZZARELLE'){
        ristoranti = [{
            codice: "RISTORANTE_3",
            descrizione: "Ristorante 3",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'FORMAGGI_LOCALI'){
        ristoranti = [{
            codice: "RISTORANTE_4",
            descrizione: "Ristorante 4",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'FORMAGGI_STAGIONATI'){
        ristoranti = [{
            codice: "RISTORANTE_5",
            descrizione: "Ristorante 5",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'FORMAGGI_FRESCHI'){
        ristoranti = [{
            codice: "RISTORANTE_6",
            descrizione: "Ristorante 6",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'BASE_DI_LATTE'){
        ristoranti = [{
            codice: "RISTORANTE_7",
            descrizione: "Ristorante 7",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PROVOLONI'){
        ristoranti = [{
            codice: "RISTORANTE_8",
            descrizione: "Ristorante 8",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'DA_FORNO'){
        ristoranti = [{
            codice: "RISTORANTE_9",
            descrizione: "Ristorante 9",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'INSACCATI'){
        ristoranti = [{
            codice: "RISTORANTE_10",
            descrizione: "Ristorante 10",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'TARALLI'){
        ristoranti = [{
            codice: "RISTORANTE_11",
            descrizione: "Ristorante 11",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'TORTE_SALATE'){
        ristoranti = [{
            codice: "RISTORANTE_12",
            descrizione: "Ristorante 12",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'YOGURT'){
        ristoranti = [{
            codice: "RISTORANTE_13",
            descrizione: "Ristorante 13",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'LATTICINI'){
        ristoranti = [{
            codice: "RISTORANTE_14",
            descrizione: "Ristorante 14",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PASTA_FRESCA'){
        ristoranti = [{
            codice: "RISTORANTE_15",
            descrizione: "Ristorante 15",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PASTA_FRESCA_RIPIENA'){
        ristoranti = [{
            codice: "RISTORANTE_16",
            descrizione: "Ristorante 16",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PIZZA'){
        ristoranti = [{
            codice: "PIZZERIA_17",
            descrizione: "Pizzeria 17",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'PANE'){
        ristoranti = [{
            codice: "PANETTERIA_18",
            descrizione: "Panetteria 18",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    } else if(categoria == 'SALSICCE'){
        ristoranti = [{
            codice: "RISTORANTE_19",
            descrizione: "Ristorante 19",
            indirizzo: "Corso Torino, 118, 10056 Oulx TO",
            contatto_telefonico: "+390122833800",
            posizione: {lat: 45.040350, lng: 6.842267}
        }];
    }
    return ristoranti;
}

/**
 * Per ogni azienda viene specificato:
 * - codice (es. AZIENDA_1)
 * - descrizione (es. Azienda 1)
 * - indirizzo (es. Corso Torino, 118, 10056 Oulx TO)
 * - contatto_telefonico (es. +390122833800)
 * - posizione (lat, lng)
 */
function findAziende(categoria) {
    let aziende = null;
    if(categoria == 'FORMAGGI'){
        aziende = [{
            codice: "AZIENDA_1",
            descrizione: "Azienda 1",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'RICOTTE'){
        aziende = [{
            codice: "AZIENDA_2",
            descrizione: "Azienda 2",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'MOZZARELLE'){
        aziende = [{
            codice: "AZIENDA_3",
            descrizione: "Azienda 3",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'FORMAGGI_LOCALI'){
        aziende = [{
            codice: "AZIENDA_4",
            descrizione: "Azienda 4",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'FORMAGGI_STAGIONATI'){
        aziende = [{
            codice: "AZIENDA_5",
            descrizione: "Azienda 5",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'FORMAGGI_FRESCHI'){
        aziende = [{
            codice: "AZIENDA_6",
            descrizione: "Azienda 6",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'BASE_DI_LATTE'){
        aziende = [{
            codice: "AZIENDA_7",
            descrizione: "Azienda 7",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'PROVOLONI'){
        aziende = [{
            codice: "AZIENDA_8",
            descrizione: "Azienda 8",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'DA_FORNO'){
        aziende = [{
            codice: "AZIENDA_9",
            descrizione: "Azienda 9",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'INSACCATI'){
        aziende = [{
            codice: "AZIENDA_10",
            descrizione: "Azienda 10",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'TARALLI'){
        aziende = [{
            codice: "AZIENDA_11",
            descrizione: "Azienda 11",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'TORTE_SALATE'){
        aziende = [{
            codice: "AZIENDA_12",
            descrizione: "Azienda 12",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'YOGURT'){
        aziende = [{
            codice: "AZIENDA_13",
            descrizione: "Azienda 13",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'LATTICINI'){
        aziende = [{
            codice: "AZIENDA_14",
            descrizione: "Azienda 14",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'PASTA_FRESCA'){
        aziende = [{
            codice: "AZIENDA_15",
            descrizione: "Azienda 15",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'PASTA_FRESCA_RIPIENA'){
        aziende = [{
            codice: "AZIENDA_16",
            descrizione: "Azienda 16",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'PIZZA'){
        aziende = [{
            codice: "PIZZERIA_17",
            descrizione: "Pizzeria 17",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'PANE'){
        aziende = [{
            codice: "PANIFICIO_18",
            descrizione: "Panificio 18",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    } else if(categoria == 'SALSICCE'){
        aziende = [{
            codice: "MACELLERIA_19",
            descrizione: "Macelleria 19",
            indirizzo: "Fraz. San Sicario, 1 Cesana Torinese (TO)",
            contatto_telefonico: "+390124356982",
            posizione: {lat: 44.966535, lng: 6.817225}
        }];
    }
    return aziende;
}

