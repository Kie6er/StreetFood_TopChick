import Swiper from 'swiper';
import $ from 'jquery';
import {
	Navigation,
	Pagination,
} from "swiper/modules";

const markers = [
	{
		address: 'Можайский вал, 10',
		coordinate: [37.528583852499565, 55.73236309372132],
		active: false,
		type: 'fast-food',
		sliderIndex: 0,
	},
	{
		address: 'Можайский вал, 10',
		coordinate: [37.639430799072265, 55.76706090220457],
		active: true,
		type: 'shawerma',
		sliderIndex: 1,
	},
	{
		address: 'Можайский вал, 10',
		coordinate: [37.413914052694864, 55.722094359037655],
		active: false,
		type: 'shawerma',
		sliderIndex: 2,
	},
	{
		address: 'Можайский вал, 10',
		coordinate: [37.502834645956575, 55.69864047842252],
		active: false,
		type: 'culinary',
		sliderIndex: 3,
	},
];
const mapModalMarkers = [
	{
		address: 'Можайский вал, 10',
		coordinate: [37.528583852499565, 55.73236309372132],
		active: true,
		type: 'fast-food',
	}
];
const mapSlider = new Swiper('.main-map__slider', {
	modules: [Navigation, Pagination],
	direction: 'horizontal',
	spaceBetween: `${remToPx(1)}rem`,
	enabled: false,
	initialSlide: 1,
	speed: 800,
	navigation: {
		nextEl: '.main-map__navigation--next',
		prevEl: '.main-map__navigation--prev'
	},
	pagination: {
		type: 'fraction',
		el: '.main-map__slider-fraction'
	},
	breakpoints: {
		768: {
			enabled: true,
		}
	}
});
$(document).ready(function () {
	// $('.main-map').length > 0 ? initMap() : null;
	$('[data-modal="map"]').on('click', () => {
		$('.map-modal').length > 0 ? initModalMap() : null;
	});
});
function remToPx(remValue) {
	// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
	var htmlFontSize = parseFloat(
		getComputedStyle(document.documentElement).fontSize
	);

	// Переводим значение из rem в px
	var pxValue = remValue * htmlFontSize;

	// Округляем значение до целых пикселей (по желанию)
	return Math.round(pxValue) + "px";
};
// async function initMap() {
// 	await ymaps3.ready;
// 	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
// 	const map = new YMap(document.getElementById('map-main'), {
// 		location: {
// 			center: [37.588144, 55.733842],
// 			zoom: 12
// 		},
// 	});
// 	map.addChild(new YMapDefaultSchemeLayer());
// 	map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

// 	markers.forEach((el) => {
// 		let content = document.createElement('div');
// 		content.classList.add('marker', el.type);
// 		content.insertAdjacentHTML('beforeend', `
// 				<svg xmlns="http://www.w3.org/2000/svg" width="34" height="48" viewBox="0 0 34 48" fill="none">
// 					<path d="M12.6411 13.8965L16.5265 27.3095H14.6303L10.6891 13.8965H8.47688L12.2879 27.3095H10.3731L6.59924 13.8965H4.40557L8.23519 27.3095H6.33898L2.54653 13.8965H0.278503L4.9447 30.2964C5.57677 32.5226 7.49158 36.1959 11.0052 37.4018L20.0773 40.3701L22.1036 47.5497H24.5018L14.9463 13.8965H12.6411Z" fill="#FFF4DA"/>
// 					<path d="M27.5682 12.134C27.9958 12.4123 29.4087 13.0802 30.617 12.5607C32.0299 11.967 31.5094 10.4643 30.2638 9.51819L32.662 9.25846L30.5799 6.8096C31.9556 3.85984 29.9292 2.46844 28.8881 2.17161C28.1817 1.96754 27.2522 2.00464 26.49 2.50555C25.9323 0.92863 24.7425 -0.0360707 23.2553 0.00103315C18.9051 0.112345 20.0391 4.93585 20.0391 4.93585L25.3002 5.47386C25.3002 5.47386 27.3823 5.64083 26.6945 5.67793C21.2475 6.08607 18.1057 12.6349 18.1057 18.7014L23.9803 39.4239L29.7247 35.0271C35.2089 29.1832 33.3312 23.3394 30.0779 16.939C28.7394 14.3973 27.7913 12.5422 27.5682 12.134Z" fill="#FFF4DA"/>
// 				</svg>
// 			`);
// 		el.active ? $(content).addClass('active') : null;
// 		clickMarker(content, el);
// 		const marker = new YMapMarker({ coordinates: el.coordinate, draggable: false }, content);
// 		map.addChild(marker);
// 	})
// };
async function initModalMap() {
	await ymaps3.ready;
	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
	const mapModal = new YMap(document.getElementById('map-modal'), {
		location: {
			center: [37.588144, 55.733842],
			zoom: 10
		},
	});
	mapModal.addChild(new YMapDefaultSchemeLayer());
	mapModal.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

	mapModalMarkers.forEach((el) => {
		let content = document.createElement('div');
		content.classList.add('marker', el.type);
		content.insertAdjacentHTML('beforeend', `
				<svg xmlns="http://www.w3.org/2000/svg" width="34" height="48" viewBox="0 0 34 48" fill="none">
					<path d="M12.6411 13.8965L16.5265 27.3095H14.6303L10.6891 13.8965H8.47688L12.2879 27.3095H10.3731L6.59924 13.8965H4.40557L8.23519 27.3095H6.33898L2.54653 13.8965H0.278503L4.9447 30.2964C5.57677 32.5226 7.49158 36.1959 11.0052 37.4018L20.0773 40.3701L22.1036 47.5497H24.5018L14.9463 13.8965H12.6411Z" fill="#FFF4DA"/>
					<path d="M27.5682 12.134C27.9958 12.4123 29.4087 13.0802 30.617 12.5607C32.0299 11.967 31.5094 10.4643 30.2638 9.51819L32.662 9.25846L30.5799 6.8096C31.9556 3.85984 29.9292 2.46844 28.8881 2.17161C28.1817 1.96754 27.2522 2.00464 26.49 2.50555C25.9323 0.92863 24.7425 -0.0360707 23.2553 0.00103315C18.9051 0.112345 20.0391 4.93585 20.0391 4.93585L25.3002 5.47386C25.3002 5.47386 27.3823 5.64083 26.6945 5.67793C21.2475 6.08607 18.1057 12.6349 18.1057 18.7014L23.9803 39.4239L29.7247 35.0271C35.2089 29.1832 33.3312 23.3394 30.0779 16.939C28.7394 14.3973 27.7913 12.5422 27.5682 12.134Z" fill="#FFF4DA"/>
				</svg>
			`);
		el.active ? $(content).addClass('active') : null;
		const markerModal = new YMapMarker({ coordinates: el.coordinate, draggable: false, zIndex: 5000, hideOutsideViewport: false }, content);
		mapModal.addChild(markerModal);
	})
	$('.map-modal').find(".modal-back").on("click", () => setTimeout(() => mapModal.destroy(), 500));
	$('.map-modal').find(".modal-exit").on("click", () => setTimeout(() => mapModal.destroy(), 500));
};
function clickMarker(content, marker) {
	$(content).on('click', function () {
		changeMarkers(content, marker);
		mapSlider.slideTo(marker.sliderIndex, 800);
	});

	$('.main-map__navigation-btn').on('click', function () {
		if (mapSlider.activeIndex === marker.sliderIndex) {
			changeMarkers(content, marker);
		};
	});
};
function changeMarkers(content, marker) {
	$('.marker').removeClass('active');
	markers.forEach(el => el.active = false);
	marker.active = true;
	$(content).addClass('active')
};
