document.addEventListener('DOMContentLoaded', () => {

    const imgHero = document.querySelector('.hero')
    let i = 0
    let time = 0
    imgs = ['arriba2.jpg', 'arriba.jpg']
    setInterval(() => {
        time++
        imgHero.style.backgroundPositionX = '-' + time + 'px'
        if (time >= 40) {
            time = 0
            imgHero.style.backgroundImage = `url(../img/${imgs[i]})`
            i === imgs.length - 1 ? i = 0 : i++
        }
        time++
    }, 100);

    const btn = document.querySelector('.btn-flotante')
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const footer = document.querySelector('footer');
        if (footer.classList.contains('activo')) {
            footer.classList.remove('activo');
            btn.classList.remove('activo');

            btn.innerText = 'Idioma y Moneda'
        } else {
            btn.classList.add('activo');
            footer.classList.add('activo');
            btn.innerText = 'Cerrar'
        }
    })
})
