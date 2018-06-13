class Game {
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

    
};