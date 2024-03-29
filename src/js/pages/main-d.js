"use strict";

import $ from "jquery";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/grid";
import { Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow, Thumbs, EffectCreative, Mousewheel, Grid } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
	ignoreMobileResize: true,
	autoRefreshEvents: "DOMContentLoaded,load,resize",
});
window.addEventListener("DOMContentLoaded", () => ScrollTrigger.refresh());
window.addEventListener("load", () => ScrollTrigger.refresh());

export const rem = function (rem) {
	if ($(window).width() > 768) {
		return 0.005208335 * $(window).width() * rem;
	} else {
		return (100 / 390) * (0.1 * $(window).width()) * rem;
	}
};

const largeSlider = () => {
	let largeSliders = document.querySelectorAll(".sliders-delivery__swiper");
	let prevArrow = document.querySelectorAll(".sliders-delivery__navigation--prev");
	let nextArrow = document.querySelectorAll(".sliders-delivery__navigation--next");
	largeSliders.forEach((slider, index) => {
		// this bit checks if there's more than 1 slide, if there's only 1 it won't loop
		let sliderLength = slider.children[0].children.length;
		let result = sliderLength > 1 ? true : false;
		const deliverySwiper = new Swiper(slider, {
			modules: [Navigation],

			slidesPerView: 1.1,
			direction: "horizontal",
			loop: true,
			spaceBetween: rem(1.6),
			navigation: {
				nextEl: nextArrow[index],
				prevEl: prevArrow[index],
			},

			breakpoints: {
				769: {
					slidesPerView: 2,
					spaceBetween: rem(2),
				},
			},
		});
	});
};
window.addEventListener("load", largeSlider);

const detailedPromotionsSwiper = new Swiper(".detailed-promotions__swiper", {
	modules: [Navigation],
	speed: 1200,
	slidesPerView: 1.15,
	loop: true,
	spaceBetween: rem(2),
	slideClass: "detailed-promotions__slide",
	wrapperClass: "detailed-promotions__swiper-wrapper",
	navigation: {
		prevEl: ".detailed-promotions__navigation--prev",
		nextEl: ".detailed-promotions__navigation--next",
	},

	breakpoints: {
		769: {
			slidesPerView: 1.34,
			spaceBetween: rem(0.9),
		},
	},
});

const otherPromotionsSwiper = new Swiper(".other-promotions__swiper", {
	modules: [Navigation, Grid],
	speed: 1200,
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: rem(0.9),
	grid: {
		rows: 2,
		fill: "row",
	},

	slideClass: "other-promotions__slide",
	wrapperClass: "other-promotions__swiper-wrapper",
	navigation: {
		prevEl: ".other-promotions__navigation--prev",
		nextEl: ".other-promotions__navigation--next",
	},
});

function stockbannerSwiperInit() {
	const stockOption = {
		modules: [Navigation, EffectFade, Pagination, Autoplay],
		direction: "vertical",
		speed: 1200,
		slidesPerView: 1,
		loop: true,
		spaceBetween: rem(1),
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		allowTouchMove: false,
		touchReleaseOnEdges: true,
	};
	if (window.outerWidth > 768) {
		const stockMainTitleSwiper = new Swiper(".stock-main__title-swiper", stockOption);
		const stockMainRightTextSwiper = new Swiper(".stock-main__right-text-swiper", stockOption);
		const stockMainLeftSwiper = new Swiper(".stock-main__left-swiper", {
			...stockOption,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				prevEl: ".stock-main__navigation--prev",
				nextEl: ".stock-main__navigation--next",
			},
		});

		const stockMainRightSwiper = new Swiper(".stock-main__right-swiper", {
			...stockOption,
			slidesPerView: 1,
			loop: true,
			navigation: {
				prevEl: ".stock-main__navigation--prev",
				nextEl: ".stock-main__navigation--next",
			},
		});

		$(".stock-main__navigation--next").on("click", (e) => {
			e.preventDefault();
			stockMainTitleSwiper.slideNext();
			stockMainRightTextSwiper.slideNext();
			stockMainLeftSwiper.slideNext();
			stockMainRightSwiper.slideNext();
		});
		$(".stock-main__navigation--prev").on("click", (e) => {
			e.preventDefault();
			stockMainTitleSwiper.slidePrev();
			stockMainRightTextSwiper.slidePrev();
			stockMainLeftSwiper.slidePrev();
			stockMainRightSwiper.slidePrev();
		});
	} else {
		const stockMainTitleSwiper = new Swiper(".stock-main__title-swiper", stockOption);
		const stockMainRightTextSwiper = new Swiper(".stock-main__right-text-swiper", stockOption);
		const stockMainLeftSwiper = new Swiper(".stock-main__left-swiper", {
			...stockOption,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				prevEl: ".stock-main__navigation--prev",
				nextEl: ".stock-main__navigation--next",
			},
		});

		const stockMainRightSwiper = new Swiper(".stock-main__right-swiper", {
			...stockOption,
			slidesPerView: 1,
			loop: true,
			navigation: {
				prevEl: ".stock-main__navigation--prev",
				nextEl: ".stock-main__navigation--next",
			},
		});

		$(".stock-main__navigation--next").on("click", (e) => {
			e.preventDefault();
			stockMainTitleSwiper.slideNext();
			stockMainRightTextSwiper.slideNext();
			stockMainLeftSwiper.slideNext();
			stockMainRightSwiper.slideNext();
		});
		$(".stock-main__navigation--prev").on("click", (e) => {
			e.preventDefault();
			stockMainTitleSwiper.slidePrev();
			stockMainRightTextSwiper.slidePrev();
			stockMainLeftSwiper.slidePrev();
			stockMainRightSwiper.slidePrev();
		});
	}
}

stockbannerSwiperInit();

function menuSwiperMain() {
	const stockOption = {
		modules: [Navigation, EffectFade, Pagination, Autoplay],
		direction: "vertical",
		speed: 1200,
		slidesPerView: 1,
		loop: true,
		spaceBetween: rem(1),
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		allowTouchMove: false,
		touchReleaseOnEdges: true,
	};
	if (window.outerWidth > 768) {
		const menuMainSwiperTitle = new Swiper(".menu-main__swiper-title", stockOption);
		const menuLeftSwiper = new Swiper(".menu-main__left-swiper", {
			...stockOption,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			pagination: {
				el: ".menu-main__fraction",
				type: "fraction",
			},
			navigation: {
				prevEl: ".menu-main__navigation--prev",
				nextEl: ".menu-main__navigation--next",
			},
		});

		const menuBtnSwiper = new Swiper(".menu-main__btn-slider", {
			...stockOption,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			pagination: {
				el: ".menu-main__fraction",
				type: "fraction",
			},
			navigation: {
				prevEl: ".menu-main__navigation--prev",
				nextEl: ".menu-main__navigation--next",
			},
		});

		$(".menu-main__navigation--next").on("click", (e) => {
			e.preventDefault();
			menuMainSwiperTitle.slideNext();
			menuLeftSwiper.slideNext();
			menuBtnSwiper.slideNext();
		});
		$(".menu-main__navigation--prev").on("click", (e) => {
			e.preventDefault();
			menuMainSwiperTitle.slidePrev();
			menuLeftSwiper.slidePrev();
			menuBtnSwiper.slidePrev();
		});
	} else {
		// const swiperTopTitle = new Swiper('.top-title-mobile', mainBannerOption);
		// const swiperBottomTitle = new Swiper('.bottom-title-mobile', mainBannerOption);
		// const swiperFooterLeft = new Swiper('.banner-footer-left-mobile', mainBannerOption);
		// const swiperFooterRight = new Swiper('.banner-footer-right-mobile', mainBannerOption);
		// const swiperBackgroundImage = new Swiper('.main-banner__right-back-mobile', mainBannerOption);
		// const swiperIllustration = new Swiper('.banner-illustration-mobile', {
		// 	modules: [Navigation, EffectFade],
		// 	...mainBannerOption,
		// 	effect: 'fade',
		// 	fadeEffect: {
		// 		crossFade: true
		// 	},
		// 	navigation: {
		// 		nextEl: '.main-banner__pagination--next',
		// 		prevEl: '.main-banner__pagination--prev',
		// 	},
		// });
		// $('.main-banner__pagination--next').on('click', e => {
		// 	e.preventDefault();
		// 	swiperTopTitle.slideNext();
		// 	swiperBottomTitle.slideNext();
		// 	swiperFooterLeft.slideNext();
		// 	swiperFooterRight.slideNext();
		// 	swiperBackgroundImage.slideNext();
		// })
		// $('.main-banner__pagination--prev').on('click', e => {
		// 	e.preventDefault();
		// 	swiperTopTitle.slidePrev();
		// 	swiperBottomTitle.slidePrev();
		// 	swiperFooterLeft.slidePrev();
		// 	swiperFooterRight.slidePrev();
		// 	swiperBackgroundImage.slidePrev();
		// })
	}
}

menuSwiperMain();

function addZero(num) {
	return num > 9 ? num : "0" + num;
}

// var initServiceDelivery = false;

// function ServiceDeliveryDown() {
//   if (window.innerWidth <= 768) {
//     if (!initServiceDelivery) {
//         initServiceDelivery = true;
//         $('.service-delivery__inner').each(function () {
// 			let more = $(this).find('.service-delivery__image');
// 			let hide = $(this).find('.service-delivery__info');
// 			more.click(function () {
// 			  hide.toggleClass('active');

// 			});
// 		  });
//     }
//   } else if (initServiceDelivery) {

//     initServiceDelivery = false;
//   }
// }
// ServiceDeliveryDown();
// window.addEventListener("resize", ServiceDeliveryDown);

var initServiceDelivery = false;

function ServiceDeliveryDown() {
	if (window.innerWidth <= 768) {
		if (!initServiceDelivery) {
			initServiceDelivery = true;
			function reveal() {
				var reveals = document.querySelectorAll(".service-delivery__info");

				for (var i = 0; i < reveals.length; i++) {
					var windowHeight = window.innerHeight;
					var elementTop = reveals[i].getBoundingClientRect().top;
					var elementVisible = 400;

					if (elementTop < windowHeight - elementVisible) {
						reveals[i].classList.add("active");
					}
				}
			}

			window.addEventListener("scroll", reveal);
		}
	} else if (initServiceDelivery) {
		initServiceDelivery = false;
	}
}
ServiceDeliveryDown();
window.addEventListener("resize", ServiceDeliveryDown);
