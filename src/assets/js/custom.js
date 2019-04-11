"use strict";
jQuery( document ).ready( function ( $ ) {
    $( window ).load( function () {
        $( ".loaderbox" ).fadeOut();
        $( ".preloader" ).delay( 1000 ).fadeOut( "slow" );
    } );
});