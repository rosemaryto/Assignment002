let userReady = prompt('Are you ready to play the game? (y or n)');

if (userReady === 'y') {
                alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');
  let userDirect = prompt('Which direction would you like to head (please enter forward, left, or right).');
  switch(userDirect) {
                case 'left':
    alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
    break;
    case 'forward':
    alert('You walk 100 yards and safely make your way out of the cave.');
    break;
    case 'right':
    alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
    break;
    default:
    alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');
  } 
  let userRate = prompt('The game is over Please rate the game between 1 and 10.')
                if(userRate >= 6 && userRate <= 10) {
    prompt('Thanks! Do you want to play again?');
  } else if(userRate >= 1 && userRate <= 5) {
                alert('We are working on improving the game');
  } else {
                alert('Thanks for playing.');
  }
} else {
                alert('Thank you and we hope you return soon!');
}


