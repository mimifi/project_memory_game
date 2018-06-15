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
        this.displayCounterMin;
        this.displayCounterSec;
    }

    /**
     * @description represent minute and second and display them
     * @method
     */
    timedCount() {
        timer.counterSec += 1;

        if (timer.counterSec % 60 === 0) {
            timer.counterMin += 1
            timer.counterSec = 0;
        }

        timer.displayCounterMin = setTextWithTrailingZeroIfNecassery(timer.counterMin);
        timer.displayCounterSec = setTextWithTrailingZeroIfNecassery(timer.counterSec);
        /**
         * @description responsible to show the time in 00:00 format
         * @function 
         * @param{number} counter
         * @returns{string} convert the counter to "00" format for min and sec 
         */

        function setTextWithTrailingZeroIfNecassery(counter) {
            return counter < 10 ? "0" + counter : counter;
        };

        $(".show_time").text(timer.displayCounterMin + ":" + timer.displayCounterSec);

        timer.timeOut = setTimeout(timer.timedCount, 1000);
    }
    /**
     * @description start to count time if boolean true
     * @method
     */

    startCount() {
        if (!this.isTimerOn) {
            this.isTimerOn = true;
            this.timedCount();
        }
    }

    /**
     * @description: give me the taken time for the timer
     * @method
     */

    giveMeTime() {
        let takenTime = timer.displayCounterMin + ":" + timer.displayCounterSec;
        return takenTime;
    }

    /**
     * @description reset the timer back to 00:00
     * @method
     */
    resetTimer() {
        alert("Let us start a new game!")
        this.counterSec = 0;
        this.counterMin = 0;
    }
    /**
     * @description timer stop to count time
     * @method
     */

    stopCount() {
        clearTimeout(this.timeOut);
        this.isTimerOn = false;
    }
}