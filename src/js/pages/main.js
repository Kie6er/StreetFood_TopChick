import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: "DOMContentLoaded,load,resize" });
window.addEventListener('DOMContentLoaded', () => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh());

$(document).ready(function () {
	ScrollTrigger.refresh();
	const mainPageMm = gsap.matchMedia();

	$('.main-menu__categories-btn').on('click', function (evt) {
		$('.main-menu__categories-btn').each(function (i, el) { $(el).removeClass('active') });
		$(evt.currentTarget).addClass('active');
		if (window.outerWidth <= 768) {
			evt.currentTarget.scrollIntoView({ block: "nearest", behavior: "smooth", inline: "center" });
		}
	});
	$('.main-advantages__video').on('click', function (evt) {
		if (!$(this).hasClass('play')) {
			$(this).addClass('play').find('video')[0].play();
			$(this).find('button').hide();
			$(this).find('img').css('opacity', 0);
			setTimeout(function () {
				$('.main-advantages__video').find('img').css('z-index', 0)
			}, 400)
		}
	})
	mainPageMm.add("(min-width: 769px)", () => { // desktop
		$('.main-advantages').length > 0 && ScrollTrigger.isTouch !== 1 ? advantagesMainPage() : null;
	});
})

function advantagesMainPage() {
	gsap.from('.main-advantages__video', {
		scale: 0.3,
		y: '-69rem',
		ease: 'power1.inOut',
		duration: 1.5,
		markerStart: true,
		scrollTrigger: {
			trigger: '.main-advantages',
			start: '25% center',
			end: '65% center',
		}
	})
}