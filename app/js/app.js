// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import {FancyTimer} from "fancy-timer";
import "slick-carousel";

document.addEventListener('DOMContentLoaded', () => {
	
	$('.header__close, .burger').click(() => {
		$('.header__nav').toggleClass('active')
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
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
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

})
