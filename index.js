$(document).ready(function(){
    $('button').click(function(){
        console.log(this)
       this.addClass('animate_btn');
       setTimeout(this.removeClass('animate_btn'), 2000)
        
      });
})




function press(){ $(document).keydown(function(event){
     var num = event.key;
  
switch(num){
case'1':
var uno = new Audio('assets/sounds/1.mp3')
uno.play();
break;
case'2':
var dos = new Audio('assets/sounds/2.mp3')
dos.play();
break;
case'3':
var tres = new Audio('assets/sounds/3.mp3')
tres.play();
break;
case'4':
var cuatro = new Audio('assets/sounds/4.mp3')
cuatro.play();
break;
case'5':
var cinco = new Audio('assets/sounds/5.mp3')
cinco.play();
break;
case'6':
var seis = new Audio('assets/sounds/6.mp3')
seis.play();
break;
case'7':
var siete = new Audio('assets/sounds/7.mp3')
siete.play();
break;
case'8':
var ocho = new Audio('assets/sounds/8.mp3')
ocho.play();
break;
case'9':
var nueve = new Audio('assets/sounds/9.mp3')
nueve.play();
break;
case'0':
var diez = new Audio('assets/sounds/10.mp3')
diez.play();

break;
default:
    alert('Click solo en numeros');

}
});}
press();
