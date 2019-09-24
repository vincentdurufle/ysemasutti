import Highway from '@dogstudio/highway';
import {
    TimelineLite
} from 'gsap';

class Slide extends Highway.Transition {
    in ({ from, to, done }) {
        // const tl = new TimelineLite();
        // tl.fromTo(to, 1, {left: '-100%'}, {left: '0%'}).fromTo(
        //     to, 1, {height: "15vh"}, {height: "85vh", top: "10%", onComplete:function() {
        //         from.remove();
        //         done();
        //     }}
        // )
        fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1});
    }
    out({
        from,
        done
    }) {
        fromTo(to.children[0], 2, {opacity: 1}, {opacity: 0});
        done();
    }
}

export default Slide;