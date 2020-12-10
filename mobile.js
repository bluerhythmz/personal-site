const menu = document.getElementsByClassName('toggle-button-container')[0]
const nav = document.querySelector('nav')
const cancel = document.getElementById('cancel')
const darken = document.getElementById('darken')
const navLinks = document.querySelectorAll('.nav-links .nav-link')

menu.addEventListener('click', () => {
    nav.classList.add('pop')
    /* setTimeout(() => {
        nav.style.transform = "translateX(0%)"
    }, 150) */
    /* nav.classList.add('pop') */
    menu.style.opacity = "0"
    darken.classList.add('shade')
    darken.style.zIndex = "1"

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
    })
})

cancel.addEventListener('click', () => {
    nav.classList.remove('pop')
    /* nav.style.right = "translateX(0%)"
    setTimeout(() => {
        nav.classList.remove('pop')
    }, 150) */
    menu.style.opacity = "1"
    darken.classList.remove('shade')
    darken.style.zIndex = "-1"
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
    })
})