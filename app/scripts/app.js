import svg4everybody from 'svg4everybody';
import $ from 'jquery';

import makeParallax from '../blocks/parallax/parallax';
import initMap from '../blocks/map/map';
import toggle from '../blocks/btn/btn';
import Slider from '../blocks/slider/slider';


/* eslint-disable */
google.maps.event.addDomListener(window, 'load', initMap);
/* eslint-enable */

document.addEventListener('DOMContentLoaded', () => {
	toggle();

	// Переворот карточки по клику на кнопку
	const loginButton = document.querySelector('.btn_auto');
	const flipper = document.querySelector('.flipper');

	if (loginButton !== null) {
		loginButton.addEventListener('click', () => {
			flipper.classList.toggle('flip');
		});
	}
	// Smooth scroll

	$('a[href^="#"]').click(function (e) {
		e.preventDefault();

		const position = $($(this).attr('href')).offset().top;

		$('body, html').animate({
			scrollTop: position
		}, 600 );
	});
});



$(() => {
	svg4everybody();

	// Паралакс фона первого экрана
	makeParallax();

	// слайдер
	Slider.init();

});





