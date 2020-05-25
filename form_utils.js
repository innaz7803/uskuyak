 /*
 * form_utils.js
 *
 * Created on 15th of September of 2015, 11:39
 * @author sgutierrez. FitnessBit S.L.
 * @version 1.0
 * 
 * General functions related to forms
 *  Public functions:
 *	submitFormPDS: submit form with prevent double submission control
 * 
 */

var FormUtils = (function () {
    /**
     * submitFormPDS: (Prevent Double Submission)
     *	    Realiza el submit del form solo si no ha sido submiteado previamente. Alternativa a jQuery.fn.preventDoubleSubmission
     * @param {type} f -- form
     * @returns {undefined}
     */
    function submitFormPDS(f){
	if (!$(f).data('submitted') === true) {
	    $(f).data('submitted', true);
	    $(f).submit();
	}
    }
    
    return { // Make public: methods + vbles
        submitFormPDS: submitFormPDS
    };
    
})();