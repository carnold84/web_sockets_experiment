// define dependent files
define(['jquery', 'utilities/Events', 'utilities/Broadcast'], 
    function($, EVENTS, BROADCAST) {

    'use strict';

    function init () {

        // hide no javascript display
        $('.no-js').addClass('remove');
    }

    return {
        
        init : init
    };

});