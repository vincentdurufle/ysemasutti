require('../css/app.css');
require('../css/queries.css');
import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';
import SwupDebugPlugin from '@swup/debug-plugin';


if (document.URL.includes('/admin')) {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    tabs.map(tab => {
        tab.addEventListener('click', function () {
            if (document.querySelector('.dropdown')) {
                document.querySelector('.dropdown').classList.toggle('dropdown');
            }
            this.lastElementChild.classList.toggle('dropdown');
        })
    })
}
if (document.location.pathname == '/admin/illustration/add') {
    $(document).ready(function () {
        $('textarea.ckeditor').ckeditor();
    });
}

if(document.querySelector('.sidenav-icon')) {
    function toggleNav() {
        document.querySelector('.sidenav').classList.toggle('sidenavToggle');
        this.classList.toggle('sidenavIconToggle');
    }
    const icon = document.querySelector('.sidenav-icon');

    icon.addEventListener('click', toggleNav);
}

//fetch three articles with axios
function onClickArticle(e) {
    e.preventDefault();

    const url = this.href;
    axios.get(url).then(function (res) {
        const html = res.data.html;

        document.querySelector('.button').insertAdjacentHTML('beforebegin', html);
    }).catch(function (err) {
        if (err.response.status == 404) {
            const button = document.querySelector('.button');

            const p = document.createElement('p').innerHTML = 'Il n\'y a pas d\'autre articles';

            button.insertAdjacentHTML('beforebegin', p);
            button.style.display = 'none';
        }
    });
    let iterable = 1;
    iterable++;
    this.search = this.search.replace(/count=1/g, `count=${iterable}`);
}



function init() {
    if (document.querySelector('#nav-icon')) {
        document.querySelector('#nav-icon').addEventListener('click', function () {
            this.classList.toggle('open');
            const menu = Array.from(document.querySelectorAll('#menu-tab'));
            menu.map(tab => {
                tab.classList.toggle('menu-dropdown-a');
            })
            this.parentElement.classList.toggle('menu-dropdown');
        });
    }
    if (document.querySelector('.img-container')) {
        //lance slider avec un compte a rebours et permet de faire pause ou reprendre
        function finalcountdown(exit) {
            timer = setInterval(() => {
                plusDivs(1);
                console.log("ok");
            }, 6000);
        }

        function event(exit) {
            if (exit === true) return;
            //Fleche change le compteur +1 à droite -1 à gauche
            document.addEventListener('keydown', (e) => {
                if (e.key == 'ArrowRight') {
                    plusDivs(1)
                }
            })
            document.addEventListener('keydown', (e) => {
                if (e.key == 'ArrowLeft') {
                    plusDivs(-1)
                }
            })

            const imgs = Array.from(document.querySelectorAll('.img-container img'));
            imgs.map(img => {
                img.addEventListener('click', () => {
                    plusDivs(1);
                })
            })

        }

        function plusDivs(n) {
            if (n === null) return;
            showDivs(count += n);
        }

        function showDivs(n) {
            if (n === null) return;

            let i;
            const divs = Array.from(document.querySelectorAll('.img-container'));
            //si on arrive au bout du diaporama => revenir au début
            if (n > divs.length) {
                count = 1
            }
            //si on va à la première image et backward => montré la dernière
            if (n < 1) {
                count = divs.length
            };
            for (i = 0; i < divs.length; i++) {
                divs[i].classList.add('not-selected');
                divs[i].classList.remove('selected');
            }
            if (exit !== true) {
                divs[count - 1].classList.add('selected');
                divs[count - 1].classList.remove('not-selected');
            }
        }

        count = 1;
        exit = false;
        showDivs(count);
        finalcountdown(exit);
        event(exit);
    }
    if (document.querySelector('.main .article-container')) {
        const axiosScript = script('https://unpkg.com/axios/dist/axios.min.js');
        axiosScript.addEventListener('load', function () {
            document.querySelector('.button').addEventListener('click', onClickArticle);
        })

    }
    if (document.querySelector('#checkout')) {
        if(!document.querySelector('.stripe')) {
            const stripeScript = script('https://js.stripe.com/v3/');
            stripeScript.addEventListener('load', function () {
                var stripe = Stripe('pk_test_SJ2a6jFKQeWCM47U3qbGHjfP00txxh25Je');
                const session = document.querySelector('#checkout').dataset.stripe;
                document.querySelector('#checkout').addEventListener('click', function () {
                    stripe.redirectToCheckout({
                        sessionId: session,
                    }).then(function (result) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer
                        // using `result.error.message`.
                    });
                })
            })
        }
    }
}

function unload() {
    if (document.querySelector('.img-container')) {
        count = null;
        exit = true;
        clearInterval(timer);

    }
    if (document.querySelector('.main .article-container')) {
        document.querySelector('.button').removeEventListener('click', onClickArticle);
    }
}

function script(src) {
    const script = document.createElement('script');
    script.src = src;
    script.classList.add('stripe');
    document.head.appendChild(script);
    return script;
}
var timer;
var exit;
var count;

const swup = new Swup({
    plugins: [
        new SwupOverlayTheme({
            color: '#DD2772',
        }),
        new SwupDebugPlugin()
    ],
})

init();
unload();
swup.on('pageView', init);
swup.on('willReplaceContent', unload);