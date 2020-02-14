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
                var userInBit = 2;                              // sets user input in bin to 2

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

//***************************************   Left or Right game  ********************************************************

    function leftOrRight() {

        var again = true;  //  sets the play again var to true for do/while

        do {

            var handBin = Math.floor(Math.random() * 2);     // random bit
            var hand;                                           // hand var declaration


            do {
                var userInBit = 2;                              // sets user input in bin to 2

                var userInput = prompt("Which hand is it in?\nLeft hand or Right hand?\n(You do not need to add 'hand')").toString().toLowerCase();   //gets user input of L/R

                if (userInput === 'left') {
                    userInBit--;                                // sets user decision to 1 for while stat and comp
                    break;
                } else if (userInput === 'right') {
                    userInBit -= 2;                             // sets user decision to 0 for while stat and comp
                    break;
                }
            } while (userInBit > 1);                            //checks cond of input to verify proper input

            if (handBin === 1) {                                //sets number value to string 'left'
                hand = 'LEFT';
            } else {                                            //sets number value to string 'right'
                hand = 'RIGHT';
            }


            if (userInBit === handBin) {                        // comparator for win/loss cond.
                alert(hand + ' Wow, you are a good guesser!!!');
            } else {
                alert(" I'm sorry it's..." + hand + ', they must have switched hands while you were guessing!!!')
            }

            again = confirm('Play again?')                      // checks if user want to play again.

        } while (again === true);

    }


//***************************************  Console Init     ************************************************************

    function gameInit() {

        var toPlay = confirm('SHALL WE PAY A GAME?');

        if (toPlay === true) {

            var gameSelect = 0;

            do {
                do {

                    gameSelect = parseInt(prompt('Please select your game :\n 1. Heads or Tails\n 2. Left hand or right hand\n 3. Global Thermonuclear War\n 0.  Exit'))

                    switch (gameSelect) {
                        case 0:
                            alert('Goodbye!');
                            break;
                        case 1:
                            headsOrTails();
                            break;
                        case 2:
                            leftOrRight();
                            break;
                        case 3:
                            alert("the only winning move is not to play.\nKAAAAABBBBBOOOOOMMMMM!!!!!!");
                            gameSelect=0;
                            break;
                    }

                } while (!isNaN(gameSelect) && (gameSelect > 3 || gameSelect < 0))

            } while (gameSelect > 0)

        } else {
            alert('Goodbye!');
        }

    }


    gameInit()


})();