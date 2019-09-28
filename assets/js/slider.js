//lance slider avec un compte a rebours et permet de faire pause ou reprendre
function finalcountdown() {
    const timer = setInterval(() => {
        plusDivs(1)
    }, 6000);
}

function event() {
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
    showDivs(count += n);
}

function showDivs(n) {
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
    divs[count - 1].classList.add('selected');
    divs[count - 1].classList.remove('not-selected');
}


var count = 1;
showDivs(count);
finalcountdown();
event();