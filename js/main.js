/**
 * @description to intialize everything and start
 */

$(document).ready(() => {
    timer = new Timer();
    stars = new Star();
    game = new Game();

    game.start();

    $(".flex-container").on("click", ".flex-item", game.onClickOnFlexItem)
});

