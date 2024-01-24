import $ from "jquery";
(function () {
	$(document).ready(function () {
		openBurgerMenu();
	});

	$(window).resize(function () {
		if (window.outerWidth > 768) {
			$(".burger-menu").removeClass("show");
			$(".burger-btn").removeClass("active");
			$("body").removeClass("lock");
		}
	});

	function openBurgerMenu() {
		$(".burger-btn").on("click", function () {
			if (!$(this).hasClass("active")) {
				$(this).addClass("active");
				$(".burger-menu").addClass("show");
				$("body").addClass("lock");
			} else {
				$(this).removeClass("active");
				$(".burger-menu").removeClass("show");
				$("body").removeClass("lock");
			}
		});
	}
})();
