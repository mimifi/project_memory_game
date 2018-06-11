/**
 *@description initialize the stars and add funtion to these
 *@constructor 
 */

class Star {

    /**
     * @description: reduce the number of full stars
     * @method
     */
    reduceStar() {
        $(".fas.fa-star:last").removeClass("fas").addClass("far");
    }
    /**
     * @description: reset the number of star to 5 full stars
     * @method
     */
    resetStars() {
        $(".far.fa-star").removeClass("far").addClass("fas");
    }
}