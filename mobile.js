const menu = document.getElementsByClassName('toggle-button-container')[0]
const nav = document.querySelector('nav')
const cancel = document.getElementById('cancel')
const darken = document.getElementById('darken')

menu.addEventListener('click', () => {
    nav.classList.add('pop')
    setTimeout(() => {
        nav.style.right = "0"
    }, 100)
    menu.style.opacity = "0"
    darken.classList.add('shade')
    darken.style.zIndex = "1"
})

cancel.addEventListener('click', () => {
    nav.classList.remove('reveal')
    nav.style.right = "-400px"
    setTimeout(() => {
        nav.classList.remove('pop')
    }, 150)
    menu.style.opacity = "1"
    darken.classList.remove('shade')
    darken.style.zIndex = "-1"
})