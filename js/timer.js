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