import svg4everybody from 'svg4everybody';
import makeParallax from '../blocks/parallax/parallax';
import $ from 'jquery';

$(() => {
	svg4everybody();

	// Переворот карточки по клику на кнопку
	const loginButton = document.querySelector('.btn_auto');
	const flipper = document.querySelector('.flipper');

	loginButton.addEventListener('click', () => {
		flipper.classList.toggle('flip');
	});

	// Паралакс фона первого экрана
	makeParallax();

});
