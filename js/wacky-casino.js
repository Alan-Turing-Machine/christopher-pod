(function() {
    "use strict";

    logon();

    // ******************** Name Prompt ********************
    function logon() {
        // Add active class to "Logon", make sure input is empty and focus on input
        document.querySelector('#logon').setAttribute('class', 'active');
        document.querySelector('#name').value = "";
        document.querySelector('#name').focus();

        // Assign name to variable and go to "Shall We Play" screen when enter/return button pressed
        document.querySelector('#name').addEventListener('keyup', function(e) {
            if(e.key === 'Enter') {
                e.preventDefault();
                var logon_name = document.querySelector('#name').value;

                shallWePlay(logon_name);
            }
        });
    }

    // ******************** Shall We Play Prompt ********************
    function shallWePlay(name) {
        // Add active class to "Shall We Play" and remove from "Logon"
        document.querySelector('#logon').removeAttribute('class');
        document.querySelector('#shall-we-play').setAttribute('class', 'active');

        // Display name, make sure input is empty and focus on input
        document.querySelector('#shall-we-play .logon-name').innerHTML = name;
        document.querySelector('#play-game').value = "";
        document.querySelector('#play-game').focus();

        /*
         * Confirm whether player wants to play a game
         * If yes, go to "Games List" screen
         * Else, go to "Goodbye" screen
         */
        document.querySelector('#play-game').addEventListener('keyup', function(e) {
            if(e.key === 'Enter') {
                e.preventDefault();
                var play_game_input = document.querySelector('#play-game').value.toLowerCase();

                if(play_game_input === 'y') {
                    showGamesList(name);
                } else {
                    document.querySelector('#shall-we-play').classList.remove('active');
                    goodbye(name);
                }
            }
        });
    }

    // ******************** Show Games List ********************
    function showGamesList(name) {
        /*
         * Add active class to "Games List", remove active from "Shall We Play",
         * make sure input is empty and focus on input
         */
        document.querySelector('#shall-we-play').removeAttribute('class');
        document.querySelector('#games-list').setAttribute('class', 'active');
        document.querySelector('#game-option').value = "";
        document.querySelector('#game-option').focus();

        /*
         * Player is to choose from the list of games (1 - 6)
         * Game is displayed depening on the user's choice
         * Player is to enter 0 if they wish to exit the game
         */
        document.querySelector('#game-option').addEventListener('keyup', function(e) {
            var game_option = document.querySelector('#game-option').value;

            if(e.key === 'Enter' && !isNaN(parseFloat(game_option))) {
                e.preventDefault();

                switch(parseFloat(game_option)) {
                    case 0:
                        document.querySelector('#games-list').removeAttribute('class');
                        goodbye(name);
                        break;
                    case 1:
                        war(name);
                        break;
                    case 2:
                        rockPaperScissors(name);
                        break;
                    case 3:
                        document.querySelector('#games-list').removeAttribute('class');
                        headsOrTails(name);
                        break;
                    case 4:
                        leftOrRight(name);
                        break;
                    case 5:
                        oneToTen(name);
                        break;
                    case 6:
                        document.querySelector('#games-list').removeAttribute('class');
                        globalThermonuclearWar(name);
                        break;
                    default:
                        break;
                }
            }
        });
    }

    // ******************** Goodbye ********************
    function goodbye(name) {
        // Add active class to "Goodbye" and display name
        document.querySelector('#goodbye').setAttribute('class', 'active');
        document.querySelector('#goodbye .logon-name').innerHTML = name;

        // After 5 seconds, player is redirected to "Logon" screen
        setTimeout(function() {
            document.querySelector('#goodbye').removeAttribute('class');
            logon();
        }, 5000);
    }

    // ******************** War ********************
    function war(name) {

    }

    // ******************** Rock, Paper, Scissors ********************
    function rockPaperScissors(name) {

    }

    // ******************** Coin Toss / Heads or Tails ********************
    function headsOrTails(name) {
        /*
        * Add active class to "Coin Toss"
        * make sure input is empty and focus on input
        */
        document.querySelector('#coin-toss').setAttribute('class', 'active');
        document.querySelector('#coin-option').value = "";
        document.querySelector('.coin-toss-results').innerHTML = "";
        document.querySelector('.play-again').classList.remove('active');
        document.querySelector('#coin-toss-again').value = "";
        document.querySelector('#coin-option').focus();

        document.querySelector('#coin-option').addEventListener('keyup', function(e) {
            var coin_option = document.querySelector('#coin-option').value.toLowerCase();

            if(e.key === 'Enter') {
                e.preventDefault();

                if(coin_option.toLowerCase() === 'heads' || coin_option.toLowerCase() === 'tails') {
                    flipCoin(coin_option, name);
                } else {
                    document.querySelector('#coin-option').value = "";
                    document.querySelector('#coin-option').focus();
                }
            }
        });

        function flipCoin(coin, name) {
            var coinFlip = Math.floor(Math.random() * 2);

            if(coinFlip === 1) {
                coinFlip = 'heads';
            } else {
                coinFlip = 'tails';
            }

            switch(name.toLowerCase()) {
                case 'clark':
                    break;
                case 'wopr':
                    break;
                default:
                    if(coin === coinFlip) {
                        document.querySelector('.coin-toss-results').innerHTML = "It's " + coin + "! You win!";
                    } else {
                        document.querySelector('.coin-toss-results').innerHTML = "Sorry, it's " + coinFlip + ". You lose.";
                    }

                    document.querySelector('.play-again').classList.add('active');
                    document.querySelector('#coin-toss-again').value = "";
                    document.querySelector('#coin-toss-again').focus();

                    var play_again = document.querySelector('#coin-toss-again').addEventListener('keyup', function(e) {
                        var play_again = document.querySelector('#coin-toss-again').value.toLowerCase();

                        if(e.key === 'Enter') {
                            e.preventDefault();

                            if(play_again === 'y' || play_again === 'n') {
                                if(play_again === 'y') {
                                    document.querySelector('.coin-toss-results').innerHTML = "";
                                    document.querySelector('.play-again').classList.remove('active');
                                    headsOrTails(name);
                                } else {
                                    document.querySelector('#coin-toss').removeAttribute('class');
                                    showGamesList(name);
                                }
                            }   else {
                                document.querySelector('#coin-toss-again').value = "";
                                document.querySelector('#coin-toss-again').focus();
                            }
                        }
                    });
            }
        }
    }

    // ******************** Guess Which Hand / Left or Right ********************
    function leftOrRight(name) {

    }

    // ******************** Pick a Number Between 1 and 10 ********************
    function oneToTen(name) {

    }

    // ******************** Global Thermonuclear War ********************
    function globalThermonuclearWar(name) {
        // Add active class to "Global Thermonuclear War" and display name
        document.querySelector('#global-thermonuclear-war').setAttribute('class', 'active');
        document.querySelector('#global-thermonuclear-war .logon-name').innerHTML = name;
    }
})();