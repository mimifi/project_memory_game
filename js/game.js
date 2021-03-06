class Game {

    /**
     * @description: get a random number between 0 - 16 
     * @constructor
     * @method
     * @returns: {number} get a random number
     */
    constructor() {

        let icons = ["fa-heart", "fa-magnet", "fa-balance-scale", "fa-bicycle",
            "fa-bug", "fa-car", "fa-coffee", "fa-dice-six"
        ];
        this.iconsGrid = icons.concat(icons);
        this.indexArray = [];
        this.clickCounter = 0;
        this.firstClickedElement;
        this.correctClickCounter = 0;
    }

    getRandomIndex() {
        return Math.floor(Math.random() * Math.floor(16));
    }

    /**
     * @description: show and hide the random icon according to random number, start the timer
     * @method
     * @param: {string} element: each element of iconsGrid
     * @param: {number} index: number of each element in array 
     */
    start() {
        this.clickCounter = 0;
        this.correctClickCounter = 0;
        this.resetIcons();
        this.indexArray = [];
        const ctx = this;
        this.moves = 0;
        timer.startCount();

        this.iconsGrid.forEach(function (element, index) {
            const icon = $('<i class="fas ' + element + '"></i>').hide();
            let randomIndex = ctx.getRandomIndex();

            while (ctx.indexArray.includes(randomIndex)) {
                randomIndex = ctx.getRandomIndex();
            }

            $($(".flex-item")[randomIndex]).append(icon);
            ctx.indexArray.push(randomIndex);
        });
    }

    /**
     * @description: check if two clicks show same icons or not - reduce the starts for each 8 clicks
     * @method
     * @return: return nothing if user click 2 time on the same icon
     */

    onClickOnFlexItem() {
        if ($(this).attr('id') === $(game.firstClickedElement).attr('id')) {
            return;
        }

        if (game.clickCounter % 8 === 7) {
            stars.reduceStar();
        }

        $(this).children().show(200);
        game.clickCounter++;

        game.twoClicks(this, game.clickCounter);
    }


    /**
     * @description: check if two icons clicked, show number of moves
     * @method
     * @param {string} ctx
     * @param {number} clickCounter 
     */
    twoClicks(ctx, clickCounter) {
        let areTwoClicks = clickCounter % 2 === 0;
        if (areTwoClicks) {
            this.showNumberOfMoves(++game.moves);
            this.checkTwoClicks(ctx, this.correctClickCounter);
            setTimeout(function () {
                game.checkGameOver(game.correctClickCounter, game.clickCounter)
            }, 500);
        } else {
            game.firstClickedElement = $(ctx);
        }
    }

    /**
     * @description: check if clicked items matched, count the correct clicked, disable the false clicked
     * @method
     * @param {string} ctx
     * @param {number} correctClickCounter
     */

    checkTwoClicks(ctx, correctClickCounter) {
        if ($(ctx).children().attr("class") === $(game.firstClickedElement).children().attr("class")) {
            game.correctClickCounter++;
            $(ctx).addClass("click-disable");
            $(game.firstClickedElement).children().addClass("click-disable");
        } else {
            $(ctx).children().hide(1000);
            $(game.firstClickedElement).children().hide(1000);
        }

    }

    /**
     * @description: check if game is over
     * @method
     * @param {number} correctClickCounter: number of correct clicks
     * @param {number} clickCounter: number of clicks
     */
    checkGameOver(correctClickCounter, clickCounter) {
        let playAgain;
        const howManyClicksToLose = 30
        const isGameWon = correctClickCounter === 8;
        const isGameLost = clickCounter > howManyClicksToLose;
        /**
         * @description Start or stop the game according to user's request
         * @function
         * @param {boolean} 
         */
        const userWantsToPlayAgain = (wantsToPlayAgain) => {
            if (wantsToPlayAgain) {
                game.reset();
            } else {
                timer.stopCount();
                $(".flex-container").off("click", ".flex-item")
            }
        }

        if (isGameWon) {
            playAgain = confirm(`Congratulation! You won this game with ${stars.numStars} star rating and in ${timer.giveMeTime()} min. \n
            If you want to play again click ok.`)
            userWantsToPlayAgain(playAgain)
        } else if (isGameLost) {
            playAgain = confirm(`Game Over! With ${this.moves} clicks in ${timer.giveMeTime()}. \nIf you want to play again click ok.`)
            userWantsToPlayAgain(playAgain)
        }
    }

    /**
     * @description: show the number of moves
     * @method
     * @param {number} 
     */
    showNumberOfMoves(numClicks) {
        $(".moves").children().text(`Number of moves ${numClicks}`)
    }

    resetNumberOfMoves() {
        $(".moves").children().text(`Number of moves: 0`)
    }

    /**
     * @description: reset the timer, reset all icons, reset 5 stars and start the game again
     * @method
     */

    reset() {
        $(".flex-container").off("click", ".flex-item", game.onClickOnFlexItem)
        $(".flex-container").on("click", ".flex-item", game.onClickOnFlexItem)
        $(".flex-item").removeClass("click-disable");
        this.resetIcons();
        this.resetNumberOfMoves();
        timer.resetTimer();
        stars.resetStars();
        game.start();
    }

    /**
     * @description: reset stars back to 5 full stars
     * @method
     */

    resetIcons() {
        $(".flex-item > i").remove();
    }


};