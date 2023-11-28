import $ from 'jquery';
(function () {
	$(document).ready(function () {
		openBurgerMenu();
		if (window.outerWidth <= 768) {
			setTimeout(function () {
				$('.burger-menu').css('display', 'flex');
			}, 0)
		} else {
			$('.burger-menu').css('display', 'none');
		}
	})

	$(window).resize(function () {
		if (window.outerWidth <= 768) {
			$('.burger-menu').css('display', 'flex');
		} else {
			$('.burger-menu').css('display', 'none');
		}
	})

	function openBurgerMenu() {
		$('.burger-btn').on('click', function () {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
				$('.burger-menu').addClass('show');
				$('body').addClass('lock');
			} else {
				$(this).removeClass('active');
				$('.burger-menu').removeClass('show');
				$('body').removeClass('lock');
			}
		})
	}
}())
