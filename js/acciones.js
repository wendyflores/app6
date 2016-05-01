// JavaScript Document

$(document).ready(function (e){
document.addEventListener("deviceready",funtion(){

$('#beep').tap(function(){
navigator.notification.beep (1);
});//tap beep

$('#vibrar').tap(function(){
navigator.notification.vibrate (1000);
});//deviceready

},false);//deviceready
});//ready
