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
		direction: 'vertical',
		speed: 1000,
		slidesPerView: 1,
		spaceBetween: `${remToPx(1)}rem`,
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

	if (window.outerWidth > 768) {
		const swiperTopTitle = new Swiper('.top-title', mainBannerOption);
		const swiperBottomTitle = new Swiper('.bottom-title', mainBannerOption);
		const swiperFooterLeft = new Swiper('.banner-footer-left', mainBannerOption);
		const swiperFooterRight = new Swiper('.banner-footer-right', mainBannerOption);
		const swiperBackgroundImage = new Swiper('.main-banner__right-back', {
			modules: [Pagination],
			...mainBannerOption,
			pagination: {
				el: '.main-banner__right-controls--progressbar',
				type: 'progressbar'
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
					let circleIndex = circleLength / swiperTopTitle.slides.length

					circleProgress.style.setProperty("--stroke-dasharray", circleLength);
					circleProgress.style.setProperty("--stroke-dashoffset", circleLength - circleIndex);
					swiperTopTitle.on('slideChange', () => {
						const progress = circleLength - circleIndex - circleIndex * (swiperTopTitle.activeIndex);
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
	} else {
		const swiperTopTitle = new Swiper('.top-title-mobile', mainBannerOption);
		const swiperBottomTitle = new Swiper('.bottom-title-mobile', mainBannerOption);
		const swiperFooterLeft = new Swiper('.banner-footer-left-mobile', mainBannerOption);
		const swiperFooterRight = new Swiper('.banner-footer-right-mobile', mainBannerOption);
		const swiperBackgroundImage = new Swiper('.main-banner__right-back-mobile', mainBannerOption);
		const swiperIllustration = new Swiper('.banner-illustration-mobile', {
			modules: [Navigation, EffectFade],
			...mainBannerOption,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: '.main-banner__pagination--next',
				prevEl: '.main-banner__pagination--prev',
			},
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
	}

		const newsSwiper = new Swiper('.news-swiper', {
			direction: 'horizontal',
			loop: true,
			speed: 1000,
			slidesPerView: 1.1,
			spaceBetween: `${remToPx(1.6)}rem`,
			breakpoints: {
				768: {
					slidesPerView: 4,
					spaceBetween: `${remToPx(1)}rem`,
				}
			},
		});
	}
)