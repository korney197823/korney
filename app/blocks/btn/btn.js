

const toggle = function toggleMenu() {

	const openMenuButton = document.querySelector('.btn_menu-toggle');
	const overlayMenu = document.querySelector('.overlay-menu');
	const closeMenuButton = document.querySelector('.overlay-menu__close');

	if (openMenuButton !== null) {

		openMenuButton.addEventListener('click', () => {
			overlayMenu.classList.add('open');
		});

		closeMenuButton.addEventListener('click', () => {
			overlayMenu.classList.remove('open');
		});
	}

};

export default toggle;
