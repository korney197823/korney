

const toggle = function toggleMenu() {
	const openMenuButton = document.querySelector('.btn_menu-toggle');
	const overlayMenu = document.querySelector('.overlay-menu');
	const closeMenuButton = document.querySelector('.overlay-menu__close');

	openMenuButton.addEventListener('click', () => {
		console.log('1');
		overlayMenu.classList.add('open');
	});

	closeMenuButton.addEventListener('click', () => {
		overlayMenu.classList.remove('open');
	});
};

export default toggle;
