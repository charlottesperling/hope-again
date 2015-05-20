$(document).ready(function () {

	$(window).resize(function(){
		if(window.innerWidth < 830) {
			$("#full-column").removeClass(".half-column");
		}
});


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
 
        if (scroll >= 100) {
            $("header").addClass('smaller');
        } else {
            $("header").removeClass("smaller");
        }

    });


$("#donate-head").addClass("donate-border");

$(window).scroll(function() {
        var scroll = $(window).scrollTop();

         if (scroll >= 100) {
            $("#donate-head").removeClass('donate-border');
        } else {
            $("#donate-head").addClass("donate-border");
        }

          });



	// $("#mobile-nav").hide();
	$(".icon-ham-menu").click(function(){
		$("#mobile-nav").slideToggle(500);
		
	
		});

	$(window).resize(function(){
		if(window.innerWidth > 830) {
			$("#mobile-nav").removeAttr("style");
		}

});
	});

