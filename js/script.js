const bar = document.querySelector('.bar');
const web = document.querySelector('#web');
const app = document.querySelector('#app');
const appPro = document.querySelectorAll('#pro')[0];
const webPro = document.querySelectorAll('#pro')[1];
const box = document.querySelectorAll('.more .btn');
const close = document.querySelector('.modal .close');
const modal = document.querySelector('.modal');

close.addEventListener('click', () => {
    modal.classList.add('hide');
    document.querySelector('#container').style.filter = 'blur(0)'
})
box.forEach(el => {
    el.addEventListener('click', () => {
        modal.classList.remove('hide');
        document.querySelector('#container').style.filter = 'blur(10px)'
    })
})

web.addEventListener('click', () => {
    changePro(webPro, appPro, app, web);
});
app.addEventListener('click', () => {
    changePro(appPro, webPro, web, app);
});
function changePro(a, b, c, d) {
    anime({
        targets: a,
        scale: [1, 0],
        opacity: [1, 0],
        easing: 'easeInOutQuad',
        duration: 200
    });
    setTimeout(() => {
        a.style.display = 'none';
    }, 200);
    setTimeout(() => {
        b.style.transform = 'scale(0)';
        b.style.opacity = '0';
        b.style.display = 'grid';
        anime({
            targets: b,
            scale: [0, 1],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 300
        });
    }, 200)
    c.className = '';
    d.className = 'active';
}
bar.addEventListener('click', () => {
    bar.classList.toggle('active');
    document.querySelector('.nav ul').classList.toggle('active')
});