const hamButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav-menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('active');
	hamButton.classList.toggle('active');
});