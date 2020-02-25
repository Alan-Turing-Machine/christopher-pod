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
                        document.querySelector('#games-list').removeAttribute('class');
                        war(name);
                        break;
                    case 2:
                        document.querySelector('#games-list').removeAttribute('class');
                        rockPaperScissors(name);
                        break;
                    case 3:
                        document.querySelector('#games-list').removeAttribute('class');
                        headsOrTails(name);
                        break;
                    case 4:
                        document.querySelector('#games-list').removeAttribute('class');
                        leftOrRight(name);
                        break;
                    case 5:
                        document.querySelector('#games-list').removeAttribute('class');
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
        /*
        * Add active class to "Rock, Paper, Scissors"
        * make sure input is empty and focus on input
        */
        document.querySelector('#rock-paper-scissors').setAttribute('class', 'active');
        document.querySelector('#rps-option').value = "";
        document.querySelector('.rps-results').innerHTML = "";
        document.querySelector('.rps-play-again').classList.remove('active');
        document.querySelector('#rps-again').value = "";
        document.querySelector('#rps-option').focus();

        document.querySelector('#rps-option').addEventListener('keyup', function(e) {
            var rps_option = document.querySelector('#rps-option').value.toLowerCase();

            if(e.key === 'Enter') {
                e.preventDefault();

                if(rps_option === 'rock' || rps_option === 'paper' || rps_option === 'scissors') {
                    rps(rps_option, name);
                } else {
                    document.querySelector('#rps-option').value = "";
                    document.querySelector('#rps-option').focus();
                }
            }
        });

        function rps(rps, name) {
            var dealer_rps = Math.floor(Math.random() * 3);

            switch(dealer_rps) {
                case 0:
                    dealer_rps = 'rock';
                    break;
                case 1:
                    dealer_rps = 'paper';
                    break;
                case 2:
                    dealer_rps = 'scissors';
            }

            switch(name.toLowerCase()) {
                case 'clark':
                    break;
                case 'wopr':
                    break;
                default:
                    if(rps === dealer_rps) {
                        document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: " + dealer_rps + ". It's a tie!";
                    } else if(rps === 'rock' && dealer_rps === 'paper') {
                        document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: " + dealer_rps + ". You lose!";
                    } else if(rps === 'rock' && dealer_rps === 'scissors') {
                        document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: " + dealer_rps + ". You win!";
                    } else if(rps === 'paper' && dealer_rps === 'rock') {
                        document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: " + dealer_rps + ". You win!";
                    } else if(rps === 'paper' && dealer_rps === 'scissors') {
                        document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: " + dealer_rps + ". You lose!";
                    } else if(rps === 'scissors' && dealer_rps === 'rock') {
                        document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: " + dealer_rps + ". You lose!";
                    } else if(rps === 'scissors' && dealer_rps === 'paper') {
                        document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: " + dealer_rps + ". You win!";
                    }

                    document.querySelector('.rps-play-again').classList.add('active');
                    document.querySelector('#rps-again').value = "";
                    document.querySelector('#rps-again').focus();

                    document.querySelector('#rps-again').addEventListener('keyup', function(e) {
                        var play_again = document.querySelector('#rps-again').value.toLowerCase();

                        if(e.key === 'Enter') {
                            e.preventDefault();

                            if(play_again === 'y' || play_again === 'n') {
                                if(play_again === 'y') {
                                    document.querySelector('.rps-results').innerHTML = "";
                                    document.querySelector('.rps-play-again').classList.remove('active');
                                    rockPaperScissors(name);
                                } else {
                                    document.querySelector('#rock-paper-scissors').removeAttribute('class');
                                    showGamesList(name);
                                }
                            }   else {
                                document.querySelector('#rps-again').value = "";
                                document.querySelector('#rps-again').focus();
                            }
                        }
                    });
            }
        }
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
        document.querySelector('.coin-play-again').classList.remove('active');
        document.querySelector('#coin-toss-again').value = "";
        document.querySelector('#coin-option').focus();

        document.querySelector('#coin-option').addEventListener('keyup', function(e) {
            var coin_option = document.querySelector('#coin-option').value.toLowerCase();

            if(e.key === 'Enter') {
                e.preventDefault();

                if(coin_option === 'heads' || coin_option === 'tails') {
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

                    document.querySelector('.coin-play-again').classList.add('active');
                    document.querySelector('#coin-toss-again').value = "";
                    document.querySelector('#coin-toss-again').focus();

                    document.querySelector('#coin-toss-again').addEventListener('keyup', function(e) {
                        var play_again = document.querySelector('#coin-toss-again').value.toLowerCase();

                        if(e.key === 'Enter') {
                            e.preventDefault();

                            if(play_again === 'y' || play_again === 'n') {
                                if(play_again === 'y') {
                                    document.querySelector('.coin-toss-results').innerHTML = "";
                                    document.querySelector('.coin-play-again').classList.remove('active');
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
        /*
        * Add active class to "Guess Which Hand"
        * make sure input is empty and focus on input
        */
        document.querySelector('#guess-which-hand').setAttribute('class', 'active');
        document.querySelector('#hand-option').value = "";
        document.querySelector('.which-hand-results').innerHTML = "";
        document.querySelector('.hand-play-again').classList.remove('active');
        document.querySelector('#which-hand-again').value = "";
        document.querySelector('#hand-option').focus();

        document.querySelector('#hand-option').addEventListener('keyup', function(e) {
            var hand_option = document.querySelector('#hand-option').value.toLowerCase();

            if(e.key === 'Enter') {
                e.preventDefault();

                if(hand_option === 'left' || hand_option === 'right') {
                    whichHand(hand_option, name);
                } else {
                    document.querySelector('#hand-option').value = "";
                    document.querySelector('#hand-option').focus();
                }
            }
        });

        function whichHand(hand, name) {
            var whichHand = Math.floor(Math.random() * 2);

            if(whichHand === 1) {
                whichHand = 'left';
            } else {
                whichHand = 'right';
            }

            switch(name.toLowerCase()) {
                case 'clark':
                    break;
                case 'wopr':
                    break;
                default:
                    if(hand === whichHand) {
                        document.querySelector('.which-hand-results').innerHTML = "It's " + hand + "! You win!";
                    } else {
                        document.querySelector('.which-hand-results').innerHTML = "Sorry, it's " + whichHand + ". You lose.";
                    }

                    document.querySelector('.hand-play-again').classList.add('active');
                    document.querySelector('#which-hand-again').value = "";
                    document.querySelector('#which-hand-again').focus();

                    document.querySelector('#which-hand-again').addEventListener('keyup', function(e) {
                        var play_again = document.querySelector('#which-hand-again').value.toLowerCase();

                        if(e.key === 'Enter') {
                            e.preventDefault();

                            if(play_again === 'y' || play_again === 'n') {
                                if(play_again === 'y') {
                                    document.querySelector('.which-hand-results').innerHTML = "";
                                    document.querySelector('.hand-play-again').classList.remove('active');
                                    leftOrRight(name);
                                } else {
                                    document.querySelector('#guess-which-hand').removeAttribute('class');
                                    showGamesList(name);
                                }
                            }   else {
                                document.querySelector('#which-hand-again').value = "";
                                document.querySelector('#which-hand-again').focus();
                            }
                        }
                    });
            }
        }
    }

    // ******************** Pick a Number Between 1 and 10 ********************
    function oneToTen(name) {
        /*
        * Add active class to "Pick a Number"
        * make sure input is empty and focus on input
        */
        document.querySelector('#pick-a-number').setAttribute('class', 'active');
        document.querySelector('#one-ten-option').value = "";
        document.querySelector('.one-ten-results').innerHTML = "";
        document.querySelector('.one-ten-play-again').classList.remove('active');
        document.querySelector('#one-ten-again').value = "";
        document.querySelector('#one-ten-option').focus();

        document.querySelector('#one-ten-option').addEventListener('keyup', function(e) {
            var one_ten_option = parseFloat(document.querySelector('#one-ten-option').value);

            if(e.key === 'Enter') {
                e.preventDefault();

                if(!isNaN(one_ten_option) && (one_ten_option >= 1 && one_ten_option <= 10)) {
                    oneTen(one_ten_option, name);
                } else {
                    document.querySelector('#one-ten-option').value = "";
                    document.querySelector('#one-ten-option').focus();
                }
            }
        });

        function oneTen(num, name) {
            var randomNum = Math.floor((Math.random() * 10) + 1);

            switch(name.toLowerCase()) {
                case 'clark':
                    break;
                case 'wopr':
                    break;
                default:
                    if(num === randomNum) {
                        document.querySelector('.one-ten-results').innerHTML = "It's " + num + "! You win!";
                    } else {
                        document.querySelector('.one-ten-results').innerHTML = "Sorry, it's " + randomNum + ". You lose.";
                    }

                    document.querySelector('.one-ten-play-again').classList.add('active');
                    document.querySelector('#one-ten-again').value = "";
                    document.querySelector('#one-ten-again').focus();

                    document.querySelector('#one-ten-again').addEventListener('keyup', function(e) {
                        var play_again = document.querySelector('#one-ten-again').value.toLowerCase();

                        if(e.key === 'Enter') {
                            e.preventDefault();

                            if(play_again === 'y' || play_again === 'n') {
                                if(play_again === 'y') {
                                    document.querySelector('.one-ten-results').innerHTML = "";
                                    document.querySelector('.one-ten-play-again').classList.remove('active');
                                    oneToTen(name);
                                } else {
                                    document.querySelector('#pick-a-number').removeAttribute('class');
                                    showGamesList(name);
                                }
                            }   else {
                                document.querySelector('#one-ten-again').value = "";
                                document.querySelector('#one-ten-again').focus();
                            }
                        }
                    });
            }
        }
    }

    // ******************** Global Thermonuclear War ********************
    function globalThermonuclearWar(name) {
        // Add active class to "Global Thermonuclear War" and display name
        document.querySelector('#global-thermonuclear-war').setAttribute('class', 'active');
        document.querySelector('#global-thermonuclear-war .logon-name').innerHTML = name;
    }
})();