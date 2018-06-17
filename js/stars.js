/**
 *@description initialize the stars and add funtion to these
 *@constructor 
 */

class Star {

    constructor() {
        this.numStars = 5;
    }
    /**
     * @description: reduce the number of full stars
     * @method
     */
    reduceStar() {

        if (this.numStars > 0) {
            $(".fas.fa-star:last").removeClass("fas").addClass("far");
            this.numStars--;
        }

    }
    /**
     * @description: reset the number of star to 5 full stars
     * @method
     */
    resetStars() {
        $(".far.fa-star").removeClass("far").addClass("fas");
    }
}