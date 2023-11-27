import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: "DOMContentLoaded,load,resize" });
window.addEventListener('DOMContentLoaded', () => {
	ScrollTrigger.refresh();
});
window.addEventListener('load', () => {
	ScrollTrigger.refresh();
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
}

$(document).ready(function () {
	ScrollTrigger.refresh();
	const mainPageMm = gsap.matchMedia();

	$('.main-menu__categories-btn').on('click', function (evt) {
		$('.main-menu__categories-btn').each(function (i, el) {
			$(el).removeClass('active');
		});
		$(evt.currentTarget).addClass('active');
		if (window.outerWidth <= 768) {
			evt.currentTarget.scrollIntoView({ block: "nearest", behavior: "smooth", inline: "center" });
		}
	});
	mainPageMm.add("(min-width: 769px)", () => { // desktop
		$('.main-advantages').length > 0 && ScrollTrigger.isTouch !== 1 ? advantagesMainPage() : null;
	});
	// mainPageMm.add("(max-width: 768px)", () => { // mobile

	// });

	function advantagesMainPage() {
		gsap.from('.main-advantages__video', {
			scale: 0.3,
			y: '-69rem',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.main-advantages',
				start: '25% center',
				end: '65% center',
				scrub: 4,
			}
		})

		$('.main-advantages__video').on('click', function (evt) {
			if (!$(this).hasClass('play')) {
				$(this).addClass('play');
				setTimeout(function () {
					$('.main-advantages__video').find('img').css('z-index', 0)
				}, 400)
				$('.main-advantages__video').find('img').css('opacity', 0)
				$(this).find('video')[0].play();
				$(this).find('button').hide();
			}
		})
	}
})