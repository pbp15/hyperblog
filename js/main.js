$(document).ready(function () {

  // setInterval()=> esta funcion permite ejecutar en  bucle cada segundo o cada cierto segundo q yo le indique

  setInterval(function () {
    var reloj = moment().format("hh:mm:ss");
    $('#reloj').html(reloj);
  }, 1000);







});