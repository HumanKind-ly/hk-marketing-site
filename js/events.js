$(document).ready(function(){

	// Parallax images - to make an image parallax, just assign 'data-speed="10" data-type="background" property to an element.

	var $window = $(window);
    $('section[data-type="background"]').each(function(){

		// assigning the object
        var $bgobj = $(this); 

        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
            // Putting together the final background position

            var coords = '50% '+ yPos + 'px';

            // Moving the background

            $bgobj.css({ backgroundPosition: coords });
        });
    });

	// Header fadeout - Just fades out content in the header as you scroll.

	$(window).scroll(function () {
	    $('#headercontainer').each(function () {
	        if (($(this).offset().top - $(window).scrollTop()) < 0) {
	            $(this).stop().fadeTo('fast', 0);
	        } else {
	            $(this).stop().fadeTo('fast', 1);
	        }
	    });
	});


	// Smooth scroll - Scrolls the page when you click a nav link.

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
});









