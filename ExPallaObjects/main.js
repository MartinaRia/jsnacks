$( document ).ready(function() {
    console.log( "pronti, palla, via!" );

    /* Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
    Peso = 10
    Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.*/

    var palla = {
      'Nome' : 'Palla',
      'Peso' : 10
    }
    console.log("Oggetto prima dell'input:", palla);

    $('button').click(
      function(){
        var pesoPallaUtente = $('.input-peso').val();
        palla.Peso = pesoPallaUtente;

        for (var key in palla) {
          $('.display-peso').append(key + ': ' + palla[key] + '<br>')
        }

      }
    )

  /*Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.*/

  var bici = [
    { 'nome' : 'Lamborghini',
      'peso' : 23
    },
    { 'nome' : 'Ferrari',
      'peso' : 25
    },
    { 'nome' : 'Bugatti',
      'peso' : 20
    },
    { 'nome' : 'Maserati',
      'peso' : 22
    },
]
var pesoBici = []

for (var i = 0; i < bici.length; i++) {
  pesoBici.push(bici[i].peso)
}
console.log(pesoBici);
pesoBici.sort();
console.log(pesoBici);
console.log(pesoBici[0]);

$('.risultato-comparazione-peso-bici').html('La bici più leggera pesa: ' + pesoBici[0])











});
