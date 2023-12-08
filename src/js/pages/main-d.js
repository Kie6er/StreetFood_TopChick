import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: "DOMContentLoaded,load,resize" });
window.addEventListener('DOMContentLoaded', () => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh());


export const rem = function (rem) {
    if ($(window).width() > 768) {
      return 0.005208335 * $(window).width() * rem;
    } else {
      return (100 / 390) * (0.1 * $(window).width()) * rem;
    }
};

const largeSlider = () => {
    let largeSliders = document.querySelectorAll('.sliders-delivery__swiper');
    let prevArrow = document.querySelectorAll('.sliders-delivery__navigation--prev');
    let nextArrow = document.querySelectorAll('.sliders-delivery__navigation--next');
    largeSliders.forEach((slider, index) => {
        // this bit checks if there's more than 1 slide, if there's only 1 it won't loop
        let sliderLength = slider.children[0].children.length;
        let result = (sliderLength > 1) ? true : false;
        const deliverySwiper = new Swiper(slider, {
            modules: [Navigation],
            speed: 1200,
            slidesPerView: 2,
            direction: 'horizontal',
            loop: true,
            slideClass: 'sliders-delivery__slide',
            spaceBetween: 10,
            wrapperClass: 'sliders-delivery__swiper-wrapper',
            navigation: {
                nextEl: nextArrow[index],
                prevEl: prevArrow[index],
            },
           


        });
    });
};
window.addEventListener('load', largeSlider);
