define(
[
    'jquery',
    'matchMedia.addListener'
],
function($){
	'use strict';

	var MIN_TABLET_WIDTH  = 768,
		MIN_DESKTOP_WIDTH = 990
	;
	var ui = {
		mediaQueries: window.matchMedia('(min-width:0px)').match,
		tabletMatch: window.matchMedia('(min-width:'+ MIN_TABLET_WIDTH +'px)'),
		desktopMatch: window.matchMedia('(min-width:'+ MIN_DESKTOP_WIDTH +'px)')
	};


	return ui;
});