require('../css/app.css');
require('../css/queries.css');
import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';

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
function init() {
    if(document.querySelector('#nav-icon')) {
        document.querySelector('#nav-icon').addEventListener('click', function () {
            this.classList.toggle('open');
            const menu = Array.from(document.querySelectorAll('#menu-tab'));
            menu.map(tab => {
                tab.classList.toggle('menu-dropdown-a');
            })
            document.querySelector('.menu-container').classList.toggle('menu-dropdown');
        });
    }
}



const swup = new Swup({
    plugins: [new SwupOverlayTheme({
        color: '#DD2772',
    })],
})

init();

swup.on('contentReplaced', init);


