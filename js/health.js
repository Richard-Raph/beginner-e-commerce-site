let menuIcon = document.querySelector('#menu-icon')
let goryR = document.querySelector('.gory')
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    goryR.classList.toggle('active');
}