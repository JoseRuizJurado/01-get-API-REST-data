/*
https://github.com/public-apis/public-apis

https://jikan.moe/

En este ejemplo solicitamos info a API REST y mostramos algún elemento
*/

var mensaje = document.getElementById('mensaje');
var boton = document.getElementById('axiosget');
boton.addEventListener('click', function() {

  axios.get('https://api.jikan.moe/v4/anime/21/full', {
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
function dibuja(gus){
  document.getElementById("nombre").innerHTML = gus.title;
  document.getElementById("source").innerHTML = gus.source;
  document.getElementById("pic").src = gus.images.jpg.image_url;
}