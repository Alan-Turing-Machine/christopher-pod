(function() {
    "use strict";

    logon();

    // ******************** Name Prompt ********************
    function logon() {
        // Add active class to "Logon", make sure input is empty and focus on input
        document.querySelector('#logon').setAttribute('class', 'active');
        document.querySelector('#name').value = "";
        document.querySelector('#name').focus();

        /*
        * Assign name to variable and go to "Shall We Play" screen when enter/return button pressed
        * Easter Eggs: If any form of Clark, Clark Griswold, Clark W. Griswold or Sparky is entered for the name, the
        *              player ALWAYS loses
        *              If WOPR is entered, the player ALWAYS ties
        */
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
         * Game is displayed depending on the user's choice
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
        /*
        * Add active class to "War"
        * make sure input is empty and focus on input
        */
        document.querySelector('#war').setAttribute('class', 'active');
        document.querySelector('.draw-cards').classList.add('active');
        document.querySelector('#draw-cards-option').value = "";
        document.querySelectorAll('.player-card, .dealer-card, .war-results, .war-play-again').forEach(function(el) {
            el.classList.remove('active');
        });
        document.querySelector('#war-again').value = "";
        document.querySelector('#draw-cards-option').focus();

        // Asks the player if they would like to draw a card; if yes, initialize the game; no, return to games list screen
        document.querySelector('#draw-cards-option').addEventListener(('keyup'), function(e) {
            var draw_option = document.querySelector('#draw-cards-option').value.toLowerCase();

            if(e.key === 'Enter') {
                e.preventDefault();

                if(draw_option === 'y' || draw_option === 'n') {
                    if(draw_option === 'y') {
                        document.querySelector('.player-card').innerHTML = name + ": ";
                        document.querySelector('.dealer-card').innerHTML = "Dealer: ";
                        document.querySelector('.war-results').innerHTML = "";
                        drawCards();
                    } else {
                        document.querySelector('#war').removeAttribute('class');
                        showGamesList(name);
                    }
                } else {
                    document.querySelector('#draw-cards-option').value = "";
                    document.querySelector('#draw-cards-option').focus();
                }
            }
        });

        // Build the deck of cards
        var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        var suits = ['C', 'D', 'H', 'S'];
        var deck = [];

        suits.forEach(function(suit) {
            cards.forEach(function(card) {
                deck.push({
                    card: card,
                    suit: suit
                });
            });
        });

        // Changes the card to Jack, Queen, King, or Ace
        function cardFace(card) {
            switch(card) {
                case 11:
                    card = 'J';
                    break;
                case 12:
                    card = 'Q';
                    break;
                case 13:
                    card = 'K';
                    break;
                case 14:
                    card = 'A';
                    break;
                default:
                    break;
            }

            return card;
        }

        function drawCards() {
            switch(name.toLowerCase()) {
                case 'clark':
                case 'clark griswold':
                case 'clark w. griswold':
                case 'sparky':
                    /*
                     * Random number generated to choose a card from the deck; removes the card so it cannot be
                     * "selected" again
                     */
                    var random_card_dealer = Math.floor(Math.random() * deck.length);
                    var dealer_card = deck[random_card_dealer];
                    deck.splice(random_card_dealer, 1);

                    /*
                     * Gets the card that is one lower from the dealer -- Clark always loses, and removes the card so it
                     * cannot be "selected" again
                     */
                    var clark_card = deck[random_card_dealer - 1];
                    deck.splice(random_card_dealer - 1, 1);

                    // Activate cards and results areas
                    document.querySelectorAll('.player-card, .dealer-card, .war-results').forEach(function(el) {
                        el.classList.add('active');
                    });

                    // Append the player's and dealer's cards
                    document.querySelector('.player-card').innerHTML += cardFace(clark_card.card) + clark_card.suit;
                    document.querySelector('.dealer-card').innerHTML += cardFace(dealer_card.card) + dealer_card.suit;

                    // Display results
                    document.querySelector('.war-results').innerHTML = 'Dealer wins!';
                    break;
                case 'wopr':
                    var count = 0;

                    // Activate cards and results areas
                    document.querySelectorAll('.player-card, .dealer-card, .war-results').forEach(function(el) {
                        el.classList.add('active');
                    });

                    // WOPR Easter egg always ties; as to not have an endless loop, the game will loop for 5 times
                    for(var i = 0; i < 5; i++) {
                        /*
                         * Random number generated to choose a card from the deck; removes the card so it cannot be
                         * "selected" again
                         */
                        var random_card = Math.floor(Math.random() * cards.length);
                        var random_wopr_suit = Math.floor(Math.random() * suits.length);
                        var random_dealer_suit = Math.floor(Math.random() * suits.length);

                        // Sets Dealer's and WOPR's cards to be same, but different suits;
                        var wopr_card = cardFace(cards[random_card]) + suits[random_wopr_suit];
                        var dealer_card = cardFace(cards[random_card]) + suits[random_dealer_suit];

                        if(wopr_card !== dealer_card) {
                            // Append the player's and dealer's cards
                            document.querySelector('.player-card').innerHTML += wopr_card;
                            document.querySelector('.dealer-card').innerHTML += dealer_card;
                        } else {
                            /*
                             * Random number generated to choose a card from the deck; removes the card so it cannot be
                             * "selected" again
                             */
                            var random_card = Math.floor(Math.random() * cards.length);
                            var random_wopr_suit = Math.floor(Math.random() * suits.length);
                            var random_dealer_suit = Math.floor(Math.random() * suits.length);

                            // Sets Dealer's and WOPR's cards to be same, but different suits;
                            var wopr_card = cardFace(cards[random_card]) + suits[random_wopr_suit];
                            var dealer_card = cardFace(cards[random_card]) + suits[random_dealer_suit];

                            // Append the player's and dealer's cards
                            document.querySelector('.player-card').innerHTML += wopr_card;
                            document.querySelector('.dealer-card').innerHTML += dealer_card;
                        }

                        if(i < 4) {
                            // Adding ellipses to simulate the three "dead" card layed down before the new card is dealt
                            document.querySelector('.player-card').innerHTML += ' ... ';
                            document.querySelector('.dealer-card').innerHTML += ' ... ';
                        }
                    }

                    // Display results
                    document.querySelector('.war-results').innerHTML = 'Seems like we\'ve reached a stalemate...';
                    break;
                default:
                    /*
                     * Random numbers are generated to choose a two differnt cards, for player and dealer from the deck;
                     * removes the card so it cannot be "selected" again
                     */
                    var random_card_player = Math.floor(Math.random() * deck.length);
                    var player_card = deck[random_num_player];
                    deck.splice(random_card_player, 1);

                    var random_card_dealer = Math.floor(Math.random() * deck.length);
                    var dealer_card = deck[random_num_dealer];
                    deck.splice(random_card_dealer, 1);

                    // Activate cards and results areas
                    document.querySelectorAll('.player-card, .dealer-card, .war-results').forEach(function(el) {
                        el.classList.add('active');
                    });

                    // Append the player's and dealer's cards
                    document.querySelector('.player-card').innerHTML += cardFace(player_card.card) + player_card.suit;
                    document.querySelector('.dealer-card').innerHTML += cardFace(dealer_card.card) + dealer_card.suit;

                    // Display results; play again if tied
                    if(player_card.card > dealer_card.card) {
                        document.querySelector('.war-results').innerHTML = name + ' wins!';
                    } else if(player_card.card < dealer_card.card) {
                        document.querySelector('.war-results').innerHTML = 'Dealer wins!';
                    } else {
                        document.querySelector('.player-card').innerHTML += ' ... ';
                        document.querySelector('.dealer-card').innerHTML += ' ... ';
                        drawCards();
                    }
            }

            // Activates "Play again" area
            document.querySelector('.war-play-again').classList.add('active');
            document.querySelector('#war-again').value = "";
            document.querySelector('#war-again').focus();

            /*
            * Asks the player if they would like to play again;
            * If yes, re-initialize the game; no, return to the games list screen
            */
            document.querySelector('#war-again').addEventListener('keyup', function(e) {
                var play_again = document.querySelector('#war-again').value.toLowerCase();

                if(e.key === 'Enter') {
                    e.preventDefault();

                    if(play_again === 'y' || play_again === 'n') {
                        if(play_again === 'y') {
                            document.querySelector('.player-card').innerHTML = name + ": ";
                            document.querySelector('.dealer-card').innerHTML = "Dealer: ";
                            document.querySelector('.war-results').innerHTML = "";
                            document.querySelectorAll('.draw-cards, .player-card, .dealer-card, .war-results, .war-play-again').forEach(function(el) {
                                el.classList.remove('active');
                            });
                            drawCards();
                        } else {
                            document.querySelector('#war').removeAttribute('class');
                            showGamesList(name);
                        }
                    }   else {
                        document.querySelector('#war-again').value = "";
                        document.querySelector('#war-again').focus();
                    }
                }
            });
        }
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

        // Asks the player to choose between rock, paper and scissors
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
                case 'clark griswald':
                case 'clark w griswald':
                case 'clark w. griswald':
                    // Always chooses the beating move -- Clark always looses
                    switch(rps) {
                        case 'rock':
                            document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: paper. You lose!";
                            break;
                        case 'paper':
                            document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: scissors. You lose!";
                            break;
                        case 'scissors':
                            document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: rock. You lose!";
                            break;
                    }
                    break;
                case 'wopr':
                    // Always chooses the same move -- WOPR always ties
                    document.querySelector('.rps-results').innerHTML = "You chose: " + rps + ". The dealer chose: " + rps + ". It's a tie!";
                    break;
                default:
                    // Uses random generated move and compares to player selection; displays results
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
            }

            /*
            * Asks the player if they would like to play again;
            * If yes, re-initialize the game; no, return to the games list screen
            */
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

        // Asks the player to choose between heads or tails
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
                case 'clark griswald':
                case 'clark w griswald':
                case 'clark w. griswald':
                    // Always chooses the opposite side -- Clark always looses
                    switch(coin) {
                        case 'heads':
                            document.querySelector('.coin-toss-results').innerHTML = "It's tails. You lose.";
                            break;
                        case 'tails':
                            document.querySelector('.coin-toss-results').innerHTML = "It's heads. You lose.";
                            break;
                    }
                    break;
                case 'wopr':
                    // Always chooses the same side -- WOPR always ties
                    document.querySelector('.which-hand-results').innerHTML = "It's " + coin + "! It's a tie! Wait, what? How is that even possible?";
                    break;
                default:
                    // Uses random generated move and compares to player selection; displays results
                    if(coin === coinFlip) {
                        document.querySelector('.coin-toss-results').innerHTML = "It's " + coin + "! You win!";
                    } else {
                        document.querySelector('.coin-toss-results').innerHTML = "Sorry, it's " + coinFlip + ". You lose.";
                    }
            }

            /*
            * Asks the player if they would like to play again;
            * If yes, re-initialize the game; no, return to the games list screen
            */
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
                case 'clark griswald':
                case 'clark w griswald':
                case 'clark w. griswald':
                    // Always chooses the opposite hand -- Clark always looses
                    switch(hand) {
                        case 'left':
                            document.querySelector('.coin-toss-results').innerHTML = "It's right. You lose.";
                            break;
                        case 'right':
                            document.querySelector('.coin-toss-results').innerHTML = "It's left. You lose.";
                            break;
                    }
                    break;
                case 'wopr':
                    // Always chooses the same hand -- WOPR always ties
                    document.querySelector('.which-hand-results').innerHTML = "It's " + hand + "! It's a tie! Wait, what? How is that even possible?";
                    break;
                default:
                    // Uses random generated move and compares to player selection; displays results
                    if(hand === whichHand) {
                        document.querySelector('.which-hand-results').innerHTML = "It's " + hand + "! You win!";
                    } else {
                        document.querySelector('.which-hand-results').innerHTML = "Sorry, it's " + whichHand + ". You lose.";
                    }
            }

            /*
            * Asks the player if they would like to play again;
            * If yes, re-initialize the game; no, return to the games list screen
            */
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
                case 'clark griswald':
                case 'clark w griswald':
                case 'clark w. griswald':
                    // The number is always 7 -- Clark always loses, even when choosing 7
                    if(num === 7) {
                        document.querySelector('.one-ten-results').innerHTML = "Sorry, it's 7. Wait, what? You chose 7, and yet you still somehow managed to lose.";
                    } else {
                        document.querySelector('.one-ten-results').innerHTML = "Sorry, it's 7. You lose.";
                    }
                    break;
                case 'wopr':
                    // Always chooses the same number -- WOPR always ties
                    document.querySelector('.one-ten-results').innerHTML = "It's " + num + "! It's a tie! Wait, what? How is that even possible?";
                    break;
                default:
                    // Uses random generated move and compares to player selection; displays results
                    if(num === randomNum) {
                        document.querySelector('.one-ten-results').innerHTML = "It's " + num + "! You win!";
                    } else {
                        document.querySelector('.one-ten-results').innerHTML = "Sorry, it's " + randomNum + ". You lose.";
                    }
            }

            /*
            * Asks the player if they would like to play again;
            * If yes, re-initialize the game; no, return to the games list screen
            */
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

    // ******************** Global Thermonuclear War ********************
    function globalThermonuclearWar(name) {
        // Add active class to "Global Thermonuclear War" and display name
        document.querySelector('#global-thermonuclear-war').setAttribute('class', 'active');
        document.querySelector('#global-thermonuclear-war .logon-name').innerHTML = name;

        // Plays explosion sound
        var explosionAudio = new Audio('audio/Bomb_Exploding-Sound_Explorer-68256487.wav');
        explosionAudio.play();

        // After 10 seconds, player is redirected to "Logon" screen
        setTimeout(function() {
            document.querySelector('#global-thermonuclear-war').removeAttribute('class');
            logon();
        }, 10000);
    }
})();