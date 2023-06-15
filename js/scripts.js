// jquery + window.innerHeight x trovare altezza pagina, poi variabile scroll top se è magg o min dell'altezza
$(window).scroll(function(){
	var st = jQuery(window).scrollTop();
	var vh = jQuery(window).height();

	if (st > 1.7 * vh) {
		jQuery(".plusmenu").addClass("visible");	
	} else {
		if (st < 1.7 * vh) {
			jQuery(".menu-text").removeClass("visible");
			jQuery(".plusmenu").removeClass("plusmenu-on");
		}
		jQuery(".plusmenu").removeClass("visible");
	}
	if (st> 50 * vh){
		jQuery(".scrolltotop").addClass("visible");
	} else {
		if (st < 50 * vh) {
			jQuery(".scrolltotop").removeClass("visible");
		}
	}
});

jQuery(".plusmenu").on( "click", function() {
	jQuery(".plusmenu").toggleClass("plusmenu-on");
	jQuery(".menu-text").toggleClass("visible");
	
	//jQuery(".plusmenu").toggleClass("plusmenu-active");
});

jQuery(".menu-text").on( "click", function() {
	jQuery(".menu-text").toggleClass("visible");
});



//////////////////////////////////////////////////////////////////////////


/* Scrollare la pagina fino all'inizio con click */
$(".scrolltotop").click(function() {
    $("html").animate({ scrollTop: 0 }, "slow");
});


/* Toglise sketch p5 per mobile */
if(window.innerWidth<992+"px"){
	jQuery("canvasForHTML").removeClass("canvasForHTML");
}

/* Accendi spegni pulsante piogge desktop */
jQuery(".article-air .button-piogge").click(function() {
	jQuery(this).toggleClass("active inactive");
    if (jQuery(this).hasClass("inactive")) {
        // console.log("inactive");
		var step = jQuery(this).closest(".step").data("step");
		var dataviz = step - 1;
		jQuery(".dataviz#dataviz-" + dataviz).removeClass("piogge");
    }
    if (jQuery(this).hasClass("active")) {
        // console.log("active");
		var step = jQuery(this).closest(".step").data("step");
		var dataviz = step - 1;
		jQuery(".dataviz#dataviz-" + dataviz).addClass("piogge");
    }
});

/* Accendi spegni pulsante piogge mobile*/
jQuery(".dataviz-mobile .button-piogge").click(function() {
	jQuery(this).toggleClass("active inactive");
    if (jQuery(this).hasClass("inactive")) {
        console.log("inactive");
		var dataviz = jQuery(this).closest(".dataviz").attr("id");
		jQuery(".dataviz#" + dataviz).removeClass("piogge");
    }
    if (jQuery(this).hasClass("active")) {
        console.log("active");
		var dataviz = jQuery(this).closest(".dataviz").attr("id");
		jQuery(".dataviz#" + dataviz).addClass("piogge");
    }
});