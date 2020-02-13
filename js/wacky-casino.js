(function () {

    'use strict'

    console.log('Welcome to the WACKY CASINO');

    function headsOrTails() {

        var again = true;

        do {

            var coinBin = Math.floor(Math.random() * 2);
            var coin;

            var userInBit = 2;

            do {

                var userInput = prompt('Heads or Tails?').toString().toLowerCase();

                if (userInput === 'heads') {
                    userInBit--;
                    break;
                } else if (userInput === 'tails') {
                    userInBit -= 2;
                    break;
                }
            } while (userInBit > 1);

            if (coinBin === 1) {
                coin = 'HEADS';
            } else {
                coin = 'TAILS';
            }


            if (userInput === coinBin) {
                alert('The coin was: ' + coin + ' Winner, Winner, Chicken dinner!!!');
            } else {
                alert(" I'm sorry it's..." + coin)
            }

            again = confirm('Play again?')

        } while (again === true);

    }


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