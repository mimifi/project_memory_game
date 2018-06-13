class Game {

    /**
     * @description: get a random number between 0 - 16 
     * @constructor
     * @function
     * @returns: {number} get a random number
     */
    constructor() {

        this.iconsGrid = ["fa-heart", "fa-heart", "fa-magnet", "fa-magnet", "fa-balance-scale", "fa-balance-scale",
            "fa-bicycle", "fa-bicycle", "fa-bug", "fa-bug", "fa-car", "fa-car", "fa-coffee", "fa-coffee", "fa-dice-six", "fa-dice-six"
        ];
        this.indexArray = [];
        this.clickCounter = 0;
        this.firstClickedElement;
    }
    getRandomIndex() {
        return Math.floor(Math.random() * Math.floor(16));
    }

    /**
     * @description: show and hide the random icon according to random number, start the timer
     * @function
     * @param: {string} element: each element of iconsGrid
     * @param: {number} index: number of each element in array 
     */
    start() {
        this.clickCounter = 0;
        this.indexArray = [];
        const ctx = this;
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
     * @description: show the number of moves
     * function
     * @param {number} numClicks 
     */
    showNumberOfMoves(numClicks) {
        $(".moves").children().text(`Number of moves ${numClicks}`)
    }


};