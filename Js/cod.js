function toggleMenu() {
    var btnMobile = document.getElementById('nav')
    nav.classList.toggle('active')
    if (nav.classList == 'active') {
        document.getElementById('btn-mobile').src = "style/x.png"
    } else {
        document.getElementById('btn-mobile').src = "style/menu.png"
    }
}
