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



