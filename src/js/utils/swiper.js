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
	})
	$('.main-banner__pagination--prev').on('click', e => {
		e.preventDefault();
		swiperTopTitle.slidePrev();
		swiperBottomTitle.slidePrev();
		swiperFooterLeft.slidePrev();
		swiperFooterRight.slidePrev();
	})
})