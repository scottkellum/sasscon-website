/**
 * Listen for printing events, destroy all active PIE instances when printing, and
 * restore them afterward.
 */
(function() {

    var elements;

    function beforePrint() {
        elements = PIE.Element.destroyAll();
    }

    function afterPrint() {
        if( elements ) {
            for( var i = 0, len = elements.length; i < len; i++ ) {
                PIE[ 'attach' ]( elements[i] );
            }
            elements = 0;
        }
    }

    PIE.OnBeforeUnload.attachManagedEvent( window, 'onbeforeprint', beforePrint );
    PIE.OnBeforeUnload.attachManagedEvent( window, 'onafterprint', afterPrint );

})();