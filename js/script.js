const bar = document.querySelector('.bar');
const projectNav = document.querySelectorAll('.project-nav p');
const web = document.querySelector('#web');
const app = document.querySelector('#app');
const appPro = document.querySelectorAll('#pro')[0];
const webPro = document.querySelectorAll('#pro')[1];

web.addEventListener('click', () => {
    changePro(appPro, webPro, app, web);
});
app.addEventListener('click', () => {
    changePro(webPro, appPro, web, app);
});
function changePro(a, b, c, d) {
    anime({
        targets: a,
        scale: [1, 0],
        easing: 'easeInOutQuad',
        duration: 500
    });
    setTimeout(() => {
        a.style.display = 'none';
    }, 500);
    b.style.transform = 'scale(0)';
    b.style.display = 'grid';
    anime({
        targets: b,
        scale: [0, 1],
        easing: 'easeInOutQuad',
        duration: 500
    });
    c.className = '';
    d.className = 'active';
}
bar.addEventListener('click', () => {
    bar.classList.toggle('active');
    document.querySelector('.nav ul').classList.toggle('active')
});