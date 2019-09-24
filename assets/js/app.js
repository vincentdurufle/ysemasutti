require('../css/app.css');
import Swup from 'swup';
// import SwupSlideTheme from '@swup/slide-theme';
import SwupOverlayTheme from '@swup/overlay-theme';
import SwupDebugPlugin from '@swup/debug-plugin';


if (document.URL.includes('/admin')) {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    tabs.map(tab => {
        tab.addEventListener('click', function () {
            this.lastElementChild.classList.toggle('dropdown');
        })
    })
}

if (document.location.pathname == '/admin/illustration/add') {
    $(document).ready(function () {
        $('textarea.ckeditor').ckeditor();
    });
}


const swup = new Swup({
    plugins: [new SwupOverlayTheme({
        color: '#DD2772',
    }), new SwupDebugPlugin()],
    
})