function difference(selector,item) {

    let container = document.querySelector(selector),
        cards = container.querySelectorAll(item),
        plus = container.querySelector('.plus'),
        number = 0;

    cards.forEach((card, i, arr) => {
        if (i !== arr.length - 1) {
            card.style.display = 'none';
        }
    });

    plus.addEventListener('click', function () {
        if (number !== 2) {
            cards[number].style.display = 'flex';
            number++;
        } else{
            cards[number].style.display = 'flex';
            cards[cards.length - 1].remove();
        }
    });




}

module.exports = (difference);