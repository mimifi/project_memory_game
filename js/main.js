//TODO: Rating with stars: rating the player with show the highlighted stars - It's dependent on the  number of movement

//TODO: Timer: Reset and show the time after clicked the reset button 

//TODO: Counter: Show the number of movements - It must be count after each 2 clicks

//TODO: Reset button: Pupup this massage "Let us play a new game and have more fun!"

/**
 * @description Timer is responsible for all timer functionality
 * @constructor
 */

class Timer {
    constructor() {
        this.counterSec = 0;
        this.counterMin = 0;
        this.timeOut;
        this.isTimerOn = false;
    }

    /**
     * @description represent minute and second and display them
     */
    timedCount() {
        let displayCounterMin;
        let displayCounterSec;
        timer.counterSec += 1;

        if (timer.counterSec % 60 === 0) {
            timer.counterMin += 1
            timer.counterSec = 0;
        }

        displayCounterMin = setTextWithTrailingZeroIfNecassery(timer.counterMin);
        displayCounterSec = setTextWithTrailingZeroIfNecassery(timer.counterSec);
        /**
         * @description responsible to show the time in 00:00 format
         * @function 
         * @param{number} counter
         * @returns{string} convert the counter to "00" format for min and sec 
         */

        function setTextWithTrailingZeroIfNecassery(counter) {
            return counter < 10 ? "0" + counter : counter;
        };

        $(".show_time").text(displayCounterMin + ":" + displayCounterSec);

        timer.timeOut = setTimeout(timer.timedCount, 1000);
    }
    /**
     * @description start to count time if boolean true
     */

    startCount() {
        if (!this.isTimerOn) {
            this.isTimerOn = true;
            this.timedCount();
        }
    }
    /**
     * @description timer stop to count time
     */

    stopCount() {
        clearTimeout(this.timeOut);
        this.isTimerOn = 0;
    }
}
/**
 * @description to intialize everything and start
 */

$(document).ready(() => {
    timer = new Timer();
})


/**
 * () => {}
 * function () {}
 */