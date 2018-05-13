var //addPlayer = document.getElementById('playerToAdd').value,
    addButton = document.getElementById('addPlayerBtn'),
    playersList = document.getElementById('playersList');

addButton.addEventListener('click', function(){
  var addPlayer = document.getElementById('playerToAdd').value;

  console.log(addPlayer);
  playersList.innerHTML+= '<li class="player-element">'+ addPlayer +'<button class="custom-button player-button" type="button" name="button">Tirar!</button> </li>';
})
