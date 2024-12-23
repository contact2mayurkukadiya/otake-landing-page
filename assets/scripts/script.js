// mobile menu

const mobileMenuButton = document.querySelector('button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

console.log('Hello from script.js!');