const burger = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})