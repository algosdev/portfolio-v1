const bar = document.querySelector('.bar');
const web = document.querySelector('#web');
const app = document.querySelector('#app');
const appPro = document.querySelectorAll('#pro')[0];
const webPro = document.querySelectorAll('#pro')[1];
const box = document.querySelectorAll('.more .btn');
const close = document.querySelector('.modal .close');
const modal = document.querySelector('.modal');

let first = (localStorage.getItem("first") === null) ? true : localStorage.getItem("first");
if (first == true) {
    setTimeout(() => {
        window.sr = ScrollReveal();
        function justFadeIn(el, d = 0) {
            sr.reveal(el, {
                duration: 2000,
                origin: 'bottom',
                delay: d
            });
        };
        justFadeIn('.fadeIn');

        let tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 0
        });
        tl.add({
            targets: '.header .name',
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        })
            .add({
                targets: '.header .lg',
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000
            }, '+=300').
            add({
                targets: '.header .md',
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            }, '+=500')
            .add({
                targets: '.header .whatDo',
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            })
            .add({
                targets: '.header .header-btn',
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            })
            .add({
                targets: '.header .nav',
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            })
        window.onload = whenOnload();
        localStorage.setItem('first', 'false');
    }, 5300);
}
else {
    whenOnload();
    document.querySelector("body").style.overflow = "visible";
}


function whenOnload() {
    document.querySelector(".preload-cont").style.display = "none";
    setTimeout(() => {
        document.querySelector("body").style.overflow = "visible";
    }, 5000);
}

close.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('back');
})
box.forEach(el => {
    el.addEventListener('click', () => {
        updateModal(parseInt(el.getAttribute('data-num')));
        modal.classList.remove('hide');
        modal.classList.add('back');
    })
});
const projects = [
    {
        title: "NikeShop",
        descr: "A single page website like real Nike shop. You can delete and add trainers to shop cart after selecting available color and size. Totally responsive!",
        img: "/img/1.jpg",
        demo: "https://nikeshop.algos.uz",
        gitOrFig: "https://www.figma.com/file/TDLnzhxZrg1CVNrLYl82O1/algo-nikeshop?node-id=0%3A1"
    },
    {
        title: "Alpetito",
        descr: "A landing page for the restaurant Alpetito (made-up name). Appetizing menu and nice effect when you hover over nav link. Totally responsive!",
        img: "/img/2.jpg",
        demo: "https://alpetito.algos.uz",
        gitOrFig: "https://www.figma.com/file/gW6DeMwLIebHrLjqy8Xinn/algo-alpetito?node-id=0%3A1"
    },
    {
        title: "HomeControl",
        descr: "One page home control application that has different features like monitoring power & water usage, turning off & on appliances, view surveilance. Not responsive!",
        img: "/img/3.jpg",
        demo: "https://home.algos.uz",
        gitOrFig: "https://www.figma.com/file/JgmY4o2fwNOcGceHtzJDu3/algo-home?node-id=0%3A1"
    },
    {
        title: "DroneZone",
        descr: "A landing page for the company who sells drones with camera. Elegent gradient header (my favourite). Totally responsive!",
        img: "/img/4.jpg",
        demo: "https://dronzone.algos.uz",
        gitOrFig: "https://github.com/algosdev/dron-landing-page"
    },
    {
        title: "AlBeyond",
        descr: "A web page for creative team of art. Before creating my own portfolio, building this page was brainstorming",
        img: "/img/5.jpg",
        demo: "https://albeyond.algos.uz",
        gitOrFig: "https://github.com/algosdev/albeyond"
    },
    {
        title: "Admino",
        descr: "A platform for admins of website. I learnt it in one of tutorials I watched and was fruitful to enhance my Bootstrap skills.",
        img: "/img/6.jpg",
        demo: "https://admino.algos.uz",
        gitOrFig: "https://github.com/algosdev/admino"
    },
    {
        title: "Calculator",
        descr: "One of my initial works that pushed me forward. Although it is not complex, it's valuable for me, so I put it on first place",
        img: "/img/7.jpg",
        demo: "https://calc.algos.uz",
        gitOrFig: "https://github.com/algosdev/calculator"
    },
    {
        title: "Typeed",
        descr: "A game-based app to find out how fast you type. There are 3 levels and my highest result is 48 words in 'Hard level'. Can you break my record?",
        img: "/img/8.jpg",
        demo: "https://typeed.algos.uz",
        gitOrFig: "https://github.com/algosdev/typeed"
    },
    {
        title: "AlQuiz",
        descr: "A math quiz. Do not worry, you don't calculate. You will select whether equation is correct or not in a minute",
        img: "/img/9.jpg",
        demo: "https://quiz.algos.uz",
        gitOrFig: "https://github.com/algosdev/mathquiz"
    },
    {
        title: "LyricsGo",
        descr: "Do you love singing? My app can find song lyrics. In this project I sharpened my JS skills (#promise , #fetching)",
        img: "/img/10.jpg",
        demo: "https://lyricsgo.algos.uz",
        gitOrFig: "https://github.com/algosdev/lyricsgo"
    },
    {
        title: "R&P&S",
        descr: "I'm sure you have played this game ever. What about playing with robot?",
        img: "/img/11.jpg",
        demo: "https://rps.algos.uz",
        gitOrFig: "https://github.com/algosdev/rock-paper-scissors"
    },
    {
        title: "Financo",
        descr: "Useful app to control your income and expenses. I love Vanilla JS but this app made me realize why I should learn framework.",
        img: "/img/12.jpg",
        demo: "https://financo.algos.uz",
        gitOrFig: "https://github.com/algosdev/financo"
    },



]
function updateModal(n) {
    document.querySelector('.modal img').setAttribute('src', `${projects[n].img}`);
    document.querySelector('.modal .title').innerHTML = `${projects[n].title}`;
    document.querySelector('.modal .description').innerHTML = `${projects[n].descr}`;
    if (n >= 3) {
        document.querySelector('.modal .demo').setAttribute('href', `${projects[n].demo}`);
        document.querySelector('.modal .github').style.display = 'block';
        document.querySelector('.modal .github').setAttribute('href', `${projects[n].gitOrFig}`);
        document.querySelector('.modal .figma').style.display = 'none';
    }
    else {
        document.querySelector('.modal .demo').setAttribute('href', `${projects[n].demo}`);
        document.querySelector('.modal .figma').style.display = 'block';
        document.querySelector('.modal .figma').setAttribute('href', `${projects[n].gitOrFig}`);
        document.querySelector('.modal .github').style.display = 'none';
    }
}
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
