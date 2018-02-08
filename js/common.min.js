$(function() {
	$(window).on("scroll", function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 0) {
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}
	});
	$(".header__mobile-toggle").on("click", function() {
		$(".header__nav").slideToggle();
		$(".header__nav").toggleClass("opened");
	});
	$(window).on("resize", function() {
		if ($( window ).width() > 992) {
			$(".header__nav").removeAttr("style");
			$(".header__nav").removeClass("opened");
		}
	})
	$(".contacts-page__link").on("click",function() {
		$(this).toggleClass("active");
		$(this).next().slideToggle();
	})
	$(".menu__tab > ul > li").on("click", function() {
		$(this).next().slideToggle();
		$(this).toggleClass("open")
	});

	$(".menu__link a").on("click", function(event) {
		event.preventDefault();
		if ($($(this).attr("href")).hasClass("active")) {

			$($(this).attr("href")).removeClass("active");
			$($(this).attr("href")).slideToggle();

		} else {

			$(".menu__tab.active").slideToggle();
			$(".menu__tab.active").removeClass("active");
			$($(this).attr("href")).slideToggle();
			$($(this).attr("href")).addClass("active");

		}
	});

	/* start smooth scroll JS */
	$(".anchor").click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1000);
	});
	/* end smooth scroll JS */

	/* start scroll spy JS */
	$("body").scrollspy({
	    target: '#pagination'
	});
	/* end scroll spy JS*/

	$('.counter').counterUp({
        delay: 100,
        time: 2000
	});

	$(".gallery-page__slider").slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		arrows: false,
		dots: true
	});

	$(".single-place__slider").slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		arrows: true,
	});

	$(".events__slider").slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		arrows: true,
		responsive: [
		    {
		      	breakpoint: 1200,
		     	settings: {
		        	arrows: false
		    	}
		    }
		]
	});

	$(".awards__slider").slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		arrows: true,
		responsive: [
		    {
		      	breakpoint: 1200,
		     	settings: {
		        	arrows: false
		    	}
		    }
		]
	});

	$(".places__slider").slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		vertical: true,
		verticalSwiping: true,
		responsive: [
		    {
		      	breakpoint: 768,
		     	settings: {
		        	slidesToShow: 1,
		    	}
		    }
		]
	});

	$(".places__slider-afisha").slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		vertical: true,
		verticalSwiping: true,
		responsive: [
		    {
		      	breakpoint: 768,
		     	settings: {
		        	slidesToShow: 1,
		    	}
		    }
		]
	});

    AOS.init({
        duration: 1000,
        offset: 200,
        disable: 'mobile'
    });
	

});
$(window).on("load", function() {
	/* start preloader js */
	$("#loader-wrapper").fadeOut();
	$("#loader").fadeOut(400);
	/* end preloader js */
});
