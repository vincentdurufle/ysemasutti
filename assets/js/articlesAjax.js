function onClickArticle(e) {
    e.preventDefault();

    const url = this.href;
    axios.get(url).then(function(res){
        const html = res.data.html;

        document.querySelector('.button').insertAdjacentHTML('beforebegin', html);
    }).catch(function(err) {
        if(err.response.status == 404) {
            const button = document.querySelector('.button');            

            const p = document.createElement('p').innerHTML = 'Il n\'y a pas d\'autre articles';

            button.insertAdjacentHTML('beforebegin', p);
            button.style.display = 'none';
        }
    });
    let count = 1;
    count++;
    this.search = this.search.replace(/count=1/g, `count=${count}`);
}
const lastArticle = Array.from(document.querySelectorAll('.article'));
document.querySelector('.button').addEventListener('click', onClickArticle);