
var rollButton = document.getElementsByClassName('player-button'),
    dice1 = document.getElementById('dice1'),
    dice2 = document.getElementById('dice2');

function hide(element){
  element.classList.toggle('hidden');
}
for (var i = 0; i < rollButton.length; i++) {
  rollButton[i].addEventListener('click', function(){
    dice1.value =  Math.floor(Math.random()*10)+1; // como patron entraría tb en una funcion
    dice2.value =  Math.floor(Math.random()*10)+1;
    console.log('dado1: '+ dice1.value);
    console.log('dado2: '+ dice2.value);
    hide(this);
  });
}
