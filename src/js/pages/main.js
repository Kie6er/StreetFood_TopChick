import $ from 'jquery';

$(document).ready(function () {
	$('.main-menu__categories-btn').on('click', function (evt) {
		$('.main-menu__categories-btn').each(function (i, el) {
			$(el).removeClass('active');
		});
		$(evt.currentTarget).addClass('active');
		if (window.outerWidth <= 768) {
			evt.currentTarget.scrollIntoView({ block: "nearest", behavior: "smooth", inline: "center" });
		}
	});
})