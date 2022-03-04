let randomNum = Math.round(Math.random());
let coinFlip = randomNum;
let choice = prompt('Choose "heads" or "tails"');

if(coinFlip < 1) {
                /* document.write('Heads'); */
  if(choice === 'heads') {
                document.write('The flip was heads and you chose heads...you win!');
  } else {
                document.write('The flip was heads and you chose tails...you lose!');
  }
} else if (coinFlip >= 1){
                /* document.write('Tails'); */
  if(choice === 'tails') {
                document.write('The flip was tails and you chose tails...you win!');
  } else {
                document.write('The flip was tails and you chose heads...you lose!');
  }
}
