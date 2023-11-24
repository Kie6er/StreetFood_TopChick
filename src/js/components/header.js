import $ from 'jquery';
$(document).ready(function () {
	if (window.outerWidth <= 768) {
		$('.burger-btn').on('click', function () {
			$(this).toggleClass('active');
			$('.burger-menu').toggleClass('show');
			$('.burger-menu').css('display', 'flex');
			$('body').toggleClass('lock');
		})

		$(window).resize(function () {
			$('.burger-btn').removeClass('active');
			$('.burger-menu').removeClass('show');
			$('body').removeClass('lock');

			if (window.outerWidth <= 768) {
				$('.burger-menu').css('display', 'flex');
			} else {
				$('.burger-menu').css('display', 'none');
			}
		})
	}
	if (window.outerWidth <= 768) {
		setTimeout(function () {
			$('.burger-menu').css('display', 'flex');
		}, 0)
	} else {
		$('.burger-menu').css('display', 'none');
	}
})