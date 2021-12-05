
const write = ["Ada", "Brendan", "Ali"];
const event1 = "birthday";
function writeCards(write, event1) {

const returnArray = [];

  for (let i = 0; i < write.length; i++) {
    returnArray[i] = (`Thank you, ${write[i]}, for the wonderful ${event1} gift!`);
    
  }

  return returnArray;
}

writeCards(write, event1);




  for (let countdown = 10; countdown >= 0; countdown--) {
    console.log(countdown);
  }
  