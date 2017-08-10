import svg4everybody from 'svg4everybody';
import $ from 'jquery';

import makeParallax from '../blocks/parallax/parallax';
import initMap from '../blocks/map/map';
import toggle from '../blocks/btn/btn';


/* eslint-disable */
google.maps.event.addDomListener(window, 'load', initMap);
/* eslint-enable */

document.addEventListener('DOMContentLoaded', () => {
	toggle();
});

// Smooth scroll

$('a[href^="#"]').click(function (e) {
	e.preventDefault();

	const position = $($(this).attr('href')).offset().top;

	$('body, html').animate({
		scrollTop: position
	}, 600 );
});

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

	// Открытие/закрытие меню

});





