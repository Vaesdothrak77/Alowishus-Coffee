const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 3,
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-next',
		prevEl: '.popular-slider-prev'
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 1,
		},
		320: {
			slidesPerView: 1,
		}
	}
});



