// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import {FancyTimer} from "fancy-timer";
import "slick-carousel";

document.addEventListener('DOMContentLoaded', () => {
	
	$('.header__close, .burger').click(() => {
		$('.header__nav').toggleClass('active')
		$('body').toggleClass('_over-hidden')
	})

	const timer = document.querySelector('.timer');
	const year = new Date().getFullYear();
	const ft = new FancyTimer(timer, {
		value: new Date((year + 1) + '-07-03'),
		captions: {
			days: 'Днів',
			hours: 'Годин',
			minutes: 'Хвилин',
			seconds: 'Секунд'
		},
		showDays: 3,
		reverseAnimation: true,
	});

	$('#command__slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1430,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	})
	

	$(".accordeon__title").on("click", function(e) {

		e.preventDefault();
		const $this = $(this);

		if (!$this.hasClass("accordeon-active")) {
			$(".accordeon__content").slideUp(400);
			$(".accordeon__title").removeClass("accordeon-active");
		}

		$this.toggleClass("accordeon-active");
		$this.next().slideToggle();
	});


	$('a[href^="#"]').click(function (e) {
		let anchor = $(this).attr('href');
		e.preventDefault()
		if ($(window).width() > 1550) {
		  //> 1550
			$('html, body').animate({
				scrollTop: $(anchor).offset().top - 112
			}, 0)
		} else if ($(window).width() > 991 && $(window).width() < 1551) {
			// < 1550 and > 991
			$('html, body').animate({
				scrollTop: $(anchor).offset().top - 85
			}, 0)
		} else {
			// < 991
			$('html, body').animate({
				scrollTop: $(anchor).offset().top
			}, 0)
			$('.header__nav.active ul li').on("click", function () {
				$('.header__nav').removeClass('active')
				$('body').removeClass('_over-hidden')
			})
		}
	})
	
	$('.header__nav ul li').click(function() {
		$('.header__nav ul li').removeClass('current')
		$(this).addClass('current')
	})

})
