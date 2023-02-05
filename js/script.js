const btn = document.getElementById('menu-btn') 
const overlay = document.getElementById('overlay')
const menu = document.getElementById('mobile-menu')

const navToggle = () => {
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu')
}

btn.addEventListener('click', navToggle)

console.log('hi')