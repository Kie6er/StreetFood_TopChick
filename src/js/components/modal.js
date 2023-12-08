import $ from 'jquery';
$(document).ready(function () {
	$(document).on("keyup", (evt) => {
		evt.keyCode === 27 ? closeModal() : null;
	});

	$('[data-modal="review"]').on("click", () => {
		openModal(".review-modal");
	});
	$('[data-modal="review-detail"]').on("click", () => {
		openModal(".review-modal-detail");
	});

	$(".modal-back").on("click", closeModal);
	$(".modal-exit").on("click", closeModal);
});

function openModal(modal) {
	$(modal).addClass("active");
	$("body").addClass("lock");
	setTimeout(() => {
		$(modal).find(".modal-wrapper").css("opacity", "1");
		$(modal).find(".modal-back").css("opacity", "1");
	}, 0);
}

function closeModal() {
	$('body').removeClass('lock');
	$(".modal-wrapper").css("opacity", "0");
	$(".modal-back").css("opacity", "0");
	setTimeout(() => {
		$(".modal").removeClass("active");
		$('.modal').find('.modal-content--first').addClass('active');
		$('.modal').find('.modal-content--second').removeClass('active');
	}, 390);
}

export { openModal, closeModal }