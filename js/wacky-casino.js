(function () {

    'use strict';
//***************************************   Welcome Message ************************************************************
    console.log('Welcome to the WACKY CASINO');

    do {

        var userName = prompt("Welcome to the WACKY CASINO!  Please enter your name.");

    } while (userName === '')

    if (userName.toLowerCase() === 'clark' || userName.toLowerCase() === 'clark griswald' || userName.toLowerCase() === 'clark w griswald' || userName.toLowerCase() === 'clark w. griswald') {
        userName = 1;
    } else if (userName.toLowerCase() === 'wopr')  {
        userName = 2;
    }


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

            if (userName === 2) {
                alert('You tied...HOW IS THAT EVEN POSSIBLE???')             //WOPR must never win, otherwise SKYNET is real and mankind is doomed!
            } else if (userInBit === 1 && (userName === 1)) {
                alert(" I'm sorry sir, it's... Tails")                       // Clark Griswald always loses at our Casino
            } else if (userInBit === 0 && (userName === 1)) {
                alert(" I'm sorry sir, it's... Heads")                       // Clark Griswald always loses at our Casino
            } else if (userInBit === coinBin) {                         // comparator for win/loss cond.
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


            if (userName === 2) {
                alert('You tied...HOW IS THAT EVEN POSSIBLE???')        //WOPR must never win, otherwise SKYNET is real and mankind is doomed!
            } else if (userInBit === 1 && (userName === 1)) {
                alert("It was in my RIGHT hand... Sorry.")              // Clark Griswald always loses at our Casino
            } else if (userInBit === 0 && (userName === 1)) {
                alert("It was in my LEFT hand... Sorry.")               // Clark Griswald always loses at our Casino
            } else if (userInBit === handBin) {                          // comparator for win/loss cond.
                alert(hand + ' Wow, you are a good guesser!!!');
            } else {
                alert(" I'm sorry it's..." + hand + ', they must have switched hands while you were guessing!!!')
            }

            again = confirm('Play again?')                      // checks if user want to play again.

        } while (again === true);

    }


//***************************************   Rock, Paper, Scissors   ****************************************************

    function rockPaperScissors() {

        var again = true;  //  sets the play again var to true for do/while

        do {

            var weaponInt = Math.floor(Math.random() * 3);     // random bit


            do {
                var userInBit = 3;                              // sets user input in bin to 3

                var userInput = prompt("Choose your weapon...Rock, Paper, or Scissors?").toString().toLowerCase();   //gets user input of R/P/S

                if (userInput === 'rock') {
                    userInBit--;                                // sets user decision to 2 for while stat and comp
                } else if (userInput === 'paper') {
                    userInBit -= 2;                               // sets user decision to 1 for while stat and comp
                } else if (userInput === 'scissors') {
                    userInBit -= 3;                             // sets user decision to 0 for while stat and comp
                }
            } while (userInBit > 2);                            //checks cond of input to verify proper input


            if (userInBit === 2 && (userName === 2)) {
                alert('ROCK ties ROCK.  Winning might be impossible...');                            //WOPR must never win, otherwise SKYNET is real and mankind is doomed!
            } else if (userInBit === 1 && (userName === 2)) {
                alert('PAPER ties PAPER.  Winning might be impossible...');                          //WOPR must never win, otherwise SKYNET is real and mankind is doomed!
            } else if (userInBit === 2 && (userName === 2)) {
                alert('SCISSORS ties SCISSORS.  Winning might be impossible...');                    //WOPR must never win, otherwise SKYNET is real and mankind is doomed!
            } else if (userInBit === 2 && (userName === 1)) {
                alert("PAPER beats ROCK\nPerhaps you should choose a different game...")        // Clark Griswald always loses at our Casino
            } else if (userInBit === 1 && (userName === 1)) {
                alert("SCISSORS beats PAPER\nPerhaps you should choose a different game...")    // Clark Griswald always loses at our Casino
            } else if (userInBit === 2 && (userName === 1)) {
                alert("ROCK beats SCISSORS\n Perhaps you should choose a different game...")    // Clark Griswald always loses at our Casino
            } else if (userInBit === 2 && weaponInt === 0) {                //cond. for rock win
                alert('ROCK beats SCISSORS\nYou WIN');
            } else if (userInBit === 1 && weaponInt === 2) {                //cond. for paper win
                alert('PAPER beats ROCK\nYou WIN');
            } else if (userInBit === 0 && weaponInt === 1) {                //cond. for scissors win
                alert('SCISSORS beats PAPER\nYou WIN');
            } else if (userInBit === 2 && weaponInt === 1) {                //cond. for rock loss
                alert('PAPER beats ROCK\nYou LOSE');
            } else if (userInBit === 1 && weaponInt === 0) {                //cond. for paper loss
                alert('SCISSORS beats PAPER\nYou LOSE');
            } else if (userInBit === 0 && weaponInt === 2) {                //cond. for scissors loss
                alert('ROCK beats SCISSORS\nYou LOSE');
            } else if (userInBit === 2 && (weaponInt !== 1 || weaponInt === 2)) {       //cond. for rock tie
                alert('ROCK ties ROCK');
            } else if (userInBit === 1 && (weaponInt !== 0 || weaponInt === 1)) {       //cond. for paper tie
                alert('PAPER ties PAPER');
            } else if (userInBit === 0 && (weaponInt !== 2 || weaponInt === 0)) {       //cond. for scissors tie
                alert('SCISSORS ties SCISSORS');
            }


            again = confirm('Play again?')                      // checks if user want to play again.

        } while (again === true);

    }

//******************************************   Pick a Number 1-10   ****************************************************

    function oneToTen() {

        var again = true;  //  sets the play again var to true for do/while

        do {

            var chalNum = Math.ceil(Math.random() * 10);                //sets computer challenge number
            var userNum = 0;                                               //sets user input number to 0 for do while.

            do {

                userNum = parseInt(prompt("Pick a number between 1 and 10"));       //get user number and val.
                if (isNaN(userNum)){
                    parseInt(prompt('Please enter a number.  1-10'));
                }
            } while (userNum === 0);

            if (userName === 2) {
                alert('You tied...This is just the weirdest thing...')                          //WOPR must never win, otherwise SKYNET is real and mankind is doomed!
            } else if (chalNum !== 7 && (userName === 1)) {
                alert("7.  You need to try harder...Or listen to EDDIE.");
                again = confirm('Play again?');
            } else if (chalNum === 7 && (userName === 1)) {
                chalNum = Math.ceil(Math.random() * 6)
                alert(chalNum + ".  You need to try harder...Or listen to EDDIE.");
                again = confirm('Play again?');
            } else if (chalNum === userNum) {
                alert("You guessed: " + userNum + "\nGreat guess the number was " + chalNum + ".  You WIN!!!");
                again = confirm('Play again?');
            } else {
                alert("You guessed: " + userNum + "\nSorry the number was " + chalNum + ".  You Lose...");
                again = confirm('Play again?');
            }

        } while (again === true);                   //sets exit condition, exit if false.

    }

//***************************************  Console Init     ************************************************************

    function gameInit() {

        var toPlay = confirm('SHALL WE PAY A GAME?');

        if (toPlay === true) {

            var gameSelect = 0;

            do {
                do {

                    gameSelect = parseInt(prompt('Please select your game :\n 1. Heads or Tails\n 2. Left hand or right hand\n 3. Rock, Paper, Scissors\n 4. Pick a Number 1-10\n 5. Global Thermonuclear War\n 0.  Exit'));

                    switch (gameSelect) {
                        case 0:
                            alert('Goodbye!');
                            // window.location.href = 'https://github.com/Alan-Turing-Machine';
                            break;
                        case 1:
                            headsOrTails();
                            break;
                        case 2:
                            leftOrRight();
                            break;
                        case 3:
                            rockPaperScissors();
                            break;
                        case 4:
                            oneToTen();
                            break;
                        case 5:
                            alert("the only winning move is not to play.\nKAAAAABBBBBOOOOOMMMMM!!!!!!");
                            gameSelect = 0;
                            break;
                    }

                } while (!isNaN(gameSelect) && (gameSelect > 3 || gameSelect < 0))

            } while (gameSelect > 0);
            {
                // window.location.href = 'https://github.com/Alan-Turing-Machine';
            }

        } else {
            alert('Goodbye!');
            // window.location.href = 'https://github.com/Alan-Turing-Machine';
        }

    }

    gameInit()

})();