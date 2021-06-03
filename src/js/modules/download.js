function download() {
    let btns = document.querySelectorAll('.download');
    link = '/src/assets/img/evolve.jpg';

    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            let element = document.createElement('a');
            element.setAttribute('href', link);
            element.setAttribute('download', 'cool');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        });
    });


}

module.exports = (download);