function showInfo() {

    btns = document.querySelectorAll('.plus__content');


btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sibling = btn.closest('.module__info-show').nextElementSibling.classList.toggle('msg');

        });


    });
}

module.exports = (showInfo);