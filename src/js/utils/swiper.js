import Swiper from 'swiper';
import $ from 'jquery';
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
	Thumbs,
	EffectCreative,
	Mousewheel,
} from "swiper/modules";

$(document).ready(function () {
	const mainBannerOption = {
		enabled: false,
		direction: 'vertical',
		speed: 1000,
		slidesPerView: 1,
		spaceBetween: `${remToPx(1)}rem`,
		breakpoints: {
			768: {
				enabled: true,
			}
		}
	}
	function remToPx(remValue) {
		// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
		var htmlFontSize = parseFloat(
			getComputedStyle(document.documentElement).fontSize
		);

		// Переводим значение из rem в px
		var pxValue = remValue * htmlFontSize;

		// Округляем значение до целых пикселей (по желанию)
		return Math.round(pxValue) + "px";
	}
	const swiperTopTitle = new Swiper('.top-title', mainBannerOption);
	const swiperBottomTitle = new Swiper('.bottom-title', mainBannerOption);
	const swiperFooterLeft = new Swiper('.banner-footer-left', mainBannerOption);
	const swiperFooterRight = new Swiper('.banner-footer-right', mainBannerOption);
	const swiperBackgroundImage = new Swiper('.main-banner__right-back', {
		modules: [Pagination,],
		...mainBannerOption,
		enabled: false,
		pagination: {
			el: '.main-banner__right-controls--progressbar',
			type: 'progressbar'
		},
		breakpoints: {
			768: {
				enabled: true,
			}
		},
		on: {
			init: function () {
				const progressbar = document.querySelector('.swiper-pagination-progressbar');
				progressbar.textContent = "";
				progressbar.insertAdjacentHTML('afterbegin', `
					<svg class="pagination-swiper-up__svg" viewBox="0 0 24 24">
						<circle class="pagination-swiper-up__bg" r="12" cx="12" cy="12" fill="none" stroke-width="0.2" />
						<circle class="pagination-swiper-up__progress" r="12" cx="12" cy="12" fill="none" stroke-width="0.2" />
					</svg>
				`);
				let circleProgress = progressbar.querySelector(".pagination-swiper-up__progress");
				let circleRadius = circleProgress.getAttribute("r");
				let circleLength = (2 * Math.PI * circleRadius) - 33;
				let circleIndex = circleLength / swiperFooterRight.slides.length

				circleProgress.style.setProperty("--stroke-dasharray", circleLength);
				circleProgress.style.setProperty("--stroke-dashoffset", circleLength - circleIndex);
				swiperFooterRight.on('slideChange', () => {
					const progress = circleLength - circleIndex - circleIndex * (swiperFooterRight.activeIndex);
					const progressIndicator = document.querySelector('.pagination-swiper-up__progress');
					progressIndicator.style.setProperty("--stroke-dashoffset", progress);
				})
			},
		}
	});
	const swiperIllustration = new Swiper('.banner-illustration', {
		modules: [Navigation, EffectFade, Pagination],
		...mainBannerOption,
		effect: 'fade',
		enabled: false,
		breakpoints: {
			768: {
				enabled: true,
			}
		},
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: '.main-banner__pagination--next',
			prevEl: '.main-banner__pagination--prev',
		},
		pagination: {
			el: '.main-banner__right-controls--fraction',
			type: 'fraction',
		}
	});

	$('.main-banner__pagination--next').on('click', e => {
		e.preventDefault();
		swiperTopTitle.slideNext();
		swiperBottomTitle.slideNext();
		swiperFooterLeft.slideNext();
		swiperFooterRight.slideNext();
		swiperBackgroundImage.slideNext();
	})
	$('.main-banner__pagination--prev').on('click', e => {
		e.preventDefault();
		swiperTopTitle.slidePrev();
		swiperBottomTitle.slidePrev();
		swiperFooterLeft.slidePrev();
		swiperFooterRight.slidePrev();
		swiperBackgroundImage.slidePrev();
	})


	const newsSwiper = new Swiper('.news-swiper', {
		direction: 'horizontal',
		speed: 1000,
		slidesPerView: 4,
		spaceBetween: `${remToPx(1)}rem`,
	  });
})