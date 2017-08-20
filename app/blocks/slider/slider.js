import $ from 'jquery';

const Slider = ( function () {

	const $container = $('#slider');
	const $contentwrapper = $($container).children('.slider__contentwrapper');

	// элементы описания для слайдов
	const $items = $contentwrapper.children('div.slider__content');
	const itemsCount = $items.length;

	const $slidewrapper = $($container).children('div.slider__slideswrapper');

	// слайды
	const $slidescontainer = $slidewrapper.find('div.slider__slides');
	const $slides = $slidescontainer.children('div');

	// стрелки навигации
	const $navprev = $slidewrapper.find('a.slider__prev');
	const $navnext = $slidewrapper.find('a.slider__next');

	let current = 0;

	let isAnimating = false;

	const transEndEventName = 'transitionend';

	const updateNavImages = function () {

		// updates the background image for the navigation arrows
		const configPrev = ( current > 0 ) ? $slides.eq( current - 1 ).css( 'background-image' ) : $slides.eq( itemsCount - 1 ).css( 'background-image' );
		const configNext = ( current < itemsCount - 1 ) ? $slides.eq( current + 1 ).css( 'background-image' ) : $slides.eq( 0 ).css( 'background-image' );


		$navprev.css( 'background-image', configPrev );
		$navnext.css( 'background-image', configNext );

	};

	const removeTransition = function () {

		isAnimating = false;
		$(this).removeClass('ps-move');

	};

	const slide = function ( dir ) {

		isAnimating = true;

		const $currentItem = $items.eq( current );
		const $currentSlide = $slides.eq( current );
		/* eslint-disable */
		// update current value
		if ( dir === 'next' ) {

			( current < itemsCount - 1 ) ? ++current : current = 0;

		}
		else if ( dir === 'prev' ) {

			( current > 0 ) ? --current : current = itemsCount - 1;

		}
		/* eslint-enable */
		// new item that will be shown
		const $newItem = $items.eq( current );
		// new slide that will be shown
		const $newSlide = $slides.eq( current );

		// position the new item up or down the viewport depending on the direction
		$newItem.css( {
			top: ( dir === 'next' ) ? '-100%' : '100%',
			zIndex: 999
		} );

		$newSlide.css( {
			top: ( dir === 'next' ) ? '100%' : '-100%',
			zIndex: 999
		} );

		setTimeout( function () {

			// move the current item and slide to the top or bottom depending on the direction
			$currentItem.addClass( 'ps-move' ).css( {
				top: ( dir === 'next' ) ? '100%' : '-100%',
				zIndex: 1
			} );

			$currentSlide.addClass( 'ps-move' ).css( {
				top: ( dir === 'next' ) ? '-100%' : '100%',
				zIndex: 1
			} );

			// move the new ones to the main viewport
			$newItem.addClass( 'ps-move' ).css( 'top', 0 );
			$newSlide.addClass( 'ps-move' ).css( 'top', 0 );

			// if no CSS transitions set the isAnimating flag to false
			// if( !support ) {
			//
			// 	isAnimating = false;
			//
			// }

		}, 0 );

		// update nav images
		updateNavImages();

	};

	const initEvents = function () {

		$navprev.on( 'click', function () {

			if ( !isAnimating ) {

				slide( 'prev' );

			}
			return false;

		} );

		$navnext.on( 'click', function () {

			if (!isAnimating) {

				slide( 'next' );

			}
			return false;

		} );

		// transition end event
		$items.on( transEndEventName, removeTransition );
		$slides.on( 'transitionend', removeTransition );

	};

	const init = function () {

	// show first item
		const $currentItem = $items.eq( current );
		const $currentSlide = $slides.eq( current );
		const initCSS = {
			top: 0,
			zIndex: 999
		};

		$currentItem.css( initCSS );
		$currentSlide.css( initCSS );

			// update nav images
		updateNavImages();

			// initialize some events
		initEvents();

	};

	return {init};

})();

export default Slider;
