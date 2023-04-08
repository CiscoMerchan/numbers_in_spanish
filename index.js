// Add and remove class animate_btn 
$(document).ready(function(){
    $('button').click(function(){
      var button = $(this); // store the reference to the button element. otherwise "this" will be window.
      button.addClass('animate_btn');
      setTimeout(function() {
        button.removeClass('animate_btn'); // use the stored reference to remove the class
      }, 200);
    });
  });


/* Event listeners keydown. When user presskey on the correspondant number it will
activate the sound and animate the button*/  
function press(){ 
    $(document).keydown(function(event){
     var num = event.key;
  
switch(num){
case'1':
playSound('assets/sounds/1.mp3')
animateButton($('.b1'));
break;
case'2':
playSound('assets/sounds/2.mp3')
animateButton($('.b2'));
break;
case'3':
playSound('assets/sounds/3.mp3')
animateButton($('.b3'));
break;
case'4':
playSound('assets/sounds/4.mp3')
animateButton($('.b4'));
break;
case'5':
playSound('assets/sounds/5.mp3')
animateButton($('.b5'));
break;
case'6':
playSound('assets/sounds/6.mp3')
animateButton($('.b6'));
break;
case'7':
playSound('assets/sounds/7.mp3')
animateButton($('.b7'));
break;
case'8':
playSound('assets/sounds/8.mp3')
animateButton($('.b8'));
break;
case'9':
playSound('assets/sounds/9.mp3')
animateButton($('.b9'));
break;
case'0':
playSound('assets/sounds/10.mp3')
animateButton($('.b10'));

break;
default:
    alert('Click solo en numeros');

}
});
}
/* This function creates a new Audio object with the provided sound URL,
 and then plays the sound using the play() method. Rather than rewrite in whole code 
 in each case of the switch with this function I just invoke playSound and as 
 parameter the soundUrl  */
function playSound(soundUrl) {
    var sound = new Audio(soundUrl);
    sound.play();
    console.log(sound);

}

function animateButton(button) {
    button.addClass('animate_btn');
    setTimeout(function() {
      button.removeClass('animate_btn');
    }, 200);
  }

press();

// Eevent listeners and animation to buttons when the user click on mouse
$('.b1').click(function() {
    playSound('assets/sounds/1.mp3');
  });
  $('.b2').click(function() {
    playSound('assets/sounds/2.mp3');
  });
  $('.b3').click(function() {
    playSound('assets/sounds/3.mp3');
  });
  $('.b4').click(function() {
    playSound('assets/sounds/4.mp3');
  });
  $('.b5').click(function() {
    playSound('assets/sounds/5.mp3');
  });
  $('.b6').click(function() {
    playSound('assets/sounds/6.mp3');
  });
  $('.b7').click(function() {
    playSound('assets/sounds/7.mp3');
  });
  $('.b8').click(function() {
    playSound('assets/sounds/8.mp3');
  });
  $('.b9').click(function() {
    playSound('assets/sounds/9.mp3');
  });
  $('.b10').click(function() {
    playSound('assets/sounds/10.mp3');
  });

