import $ from 'jquery';
$(document).ready(function () {
	if (window.outerWidth <= 768) {
		$('.burger-btn').on('click', function () {
			$(this).toggleClass('active');
			$('.burger-menu').toggleClass('show');
			$('body').toggleClass('lock');
		})

		$(window).resize(function () {
			$('.burger-btn').removeClass('active');
			$('.burger-menu').removeClass('show');
			$('body').removeClass('lock');
		})
	}
	setTimeout(function () {
		$('.burger-menu').css('display', 'flex');
	}, 0)
})