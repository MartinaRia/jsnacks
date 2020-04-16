// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.



$( document ).ready(function() {
    console.log( "pronti, palla, via!" );

    var palla = {
      'Nome' : 'palla',
      'Peso' : 10
    }
    console.log('Oggetto prima del prompt:', palla);

    var pesoPallaUtente = parseInt(prompt('Quanto pesa la palla?'));

    palla.Peso = pesoPallaUtente;

    console.log('Valore peso palla: ' + palla.Peso);
    console.log('Oggetto dopo il prompt:', palla);


});
