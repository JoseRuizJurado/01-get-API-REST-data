/*
https://github.com/public-apis/public-apis

https://jikan.moe/

En este ejemplo solicitamos info a API REST y mostramos algún elemento
*/

var mensaje = document.getElementById('mensaje');
var boton = document.getElementById('axiosget');
boton.addEventListener('click', function() {

  axios.get('https://pokeapi.co/api/v2/pokemon/25', {
    responseType: 'json'
  })
    .then(function(res) {
      if(res.status==200) {
        console.log(res.data.data);
       var carac = res.data.data;
        dibuja(carac);
      } 
    })
    .catch(function(err) {
      console.log(err);
    })
    
});
function dibuja(pokemon) {
    document.getElementById("nombre").innerHTML = pokemon.name;
    document.getElementById("source").innerHTML = 'API de Pokemon';
    document.getElementById("pic").src = pokemon.sprites.other['official-artwork'].front_default;
  }