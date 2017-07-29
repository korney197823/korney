import $ from 'jquery';

function makeParallax() {
	// Параллакс
	$(document).ready(function () {
		const layer = $('.parallax').find('.parallax__layer');

		layer.map(function (key, value) {
			const bottomPosition = (window.innerHeight / 2) * (key / 10);
			$(value).css({
				bottom: `-${bottomPosition}px`,
				transform: 'translate3d(0, 0, 0)'
			});
		});

		$(window).on('mousemove', function (e) {
			const mouseX = e.pageX;
			const mouseY = e.pageY;
			const w = (window.innerWidth / 2) - mouseX;
			const h = (window.innerHeight / 2) - mouseY;

			layer.map(function (key, value) {
				const bottomPosition = (window.innerHeight / 2) * (key / 10);
				const widthPosition = w * (key / 100);
				const heightsPosition = h * (key / 100);
				$(value).css({
					bottom: `-${bottomPosition}px`,
					transform: `translate3d(${widthPosition}px, ${heightsPosition}px, 0)`
				});
			});

		});

	});
}

export default makeParallax;
