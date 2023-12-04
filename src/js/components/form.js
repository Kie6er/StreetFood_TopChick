import IMask from 'imask';
import $ from 'jquery';
$(document).ready(function () {
	const phone = document.querySelectorAll('[type="tel"]');
	const maskOptions = {
		mask: '+{7} (000) 000-00-00',
	}

	phone.forEach(function (element) {
		const mask = IMask(element, maskOptions);
	})

	$('.form').on('submit', (evt) => {
		evt.preventDefault();
		const currentForm = $(evt.currentTarget);

		if (validationForm(currentForm) === true) {
			if (currentForm.hasClass('review-modal__form')) {
				switchModalContent('.review-modal');
			} else if (currentForm.hasClass('footer__form')) {
				const modalSubscribe = $('.subscribe');

				modalSubscribe.addClass('active');
				$("body").addClass("lock");
				setTimeout(() => {
					modalSubscribe.find(".modal-wrapper").css("opacity", "1");
					modalSubscribe.find(".modal-back").css("opacity", "1");
				}, 0);
			}
			currentForm.find('input').val('');
			currentForm.find('textarea').val('');
		};
	})
})

function switchModalContent(modal) {
	$(modal).find('.modal-content--first').removeClass('active');
	$(modal).find('.modal-content--second').addClass('active');
}

function validationForm(form) {
	let result = true;

	form.find('input').each(function (index, element) {
		removeError($(element));

		if ($(element).data('minLength')) {
			if ($(element).val().length < 18) {
				removeError($(element));
				createError($(element), `Минимальное кол-во символов: ${$(element).data('minLength')}`)
				result = false;
			}
		}

		if ($(element).data('required')) {
			if ($(element).val().length == 0) {
				removeError($(element));
				createError($(element), 'Заполните поле')
				result = false;
			}
		}
	});

	form.find('.textarea-review').each(function (index, element) {
		removeError($(element));

		if ($(element).data('required')) {
			if ($(element).val().length == 0) {
				removeError($(element));
				createError($(element), 'Заполните поле')
				result = false;
			}
		}
	});

	function removeError(input) {
		const parent = input.parent();
		if (parent.hasClass('error')) {
			parent.find('.error-text').remove();
			parent.removeClass('error');
		}
	}

	function createError(input, text) {
		const errorText = $(`<p class="error-text">${text}</p>`);
		input.parent().addClass('error').append(errorText);
	}

	return result
}

