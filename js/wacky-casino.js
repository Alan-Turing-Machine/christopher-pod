(function () {

    'use strict'
//***************************************   Welcome Message ************************************************************
    console.log('Welcome to the WACKY CASINO');


//***************************************   Coin flip game  ************************************************************
    function headsOrTails() {

        var again = true;  //  sets the play again var to true for do/while

        do {

            var coinBin = Math.floor(Math.random() * 2);     // random bit
            var coin;                                           // coin var declaration


            do {
                var userInBit = 2;                                  // sets user input in bin to 2

                var userInput = prompt('Heads or Tails?').toString().toLowerCase();   //gets user input of H/T

                if (userInput === 'heads') {
                    userInBit--;                                // sets user decision to 1 for while stat and comp
                    break;
                } else if (userInput === 'tails') {
                    userInBit -= 2;                             // sets user decision to 0 for while stat and comp
                    break;
                }
            } while (userInBit > 1);                            //checks cond of input to verify proper input

            if (coinBin === 1) {                                //sets number value to string 'heads'
                coin = 'HEADS';
            } else {                                            //sets number value to string 'tails'
                coin = 'TAILS';
            }


            if (userInBit === coinBin) {                        // comparator for win/loss cond.
                alert('The coin was: ' + coin + ' Winner, Winner, Chicken dinner!!!');
            } else {
                alert(" I'm sorry it's..." + coin)
            }

            again = confirm('Play again?')                      // checks if user want to play again.

        } while (again === true);

    }


//***************************************  Console Init     ************************************************************

    function gameInit() {
        var toPlay = confirm('SHALL WE PAY A GAME?');

        if (toPlay === true) {

            headsOrTails();

        } else {
            alert('Goodbye!');
        }

    }


    gameInit()


})();