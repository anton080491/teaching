function mainSlide() {

    let page = document.querySelector('.page'),
        slides = page.querySelectorAll('.slide'),
        btns = document.querySelectorAll('.next'),
        slideIndex = 1,
        hanson = document.querySelector('.hanson');
        




    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        hanson.style.opacity = '0';
        if (n == 3) {
            hanson.classList.add('animated');

            setTimeout(function () {
                hanson.style.opacity = '1';
                hanson.classList.add('slideInUp');
            }, 3000);
        } else {
            hanson.classList.remove('slideInUp');
        }

        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            plusSlides(1);
        });
        btn.parentNode.previousElementSibling.addEventListener('click', function (e) {
            e.preventDefault();
            slideIndex = 1;
            slides.forEach(function (slide) {
                slide.style.display = 'none';
            });
            slides[slideIndex - 1].style.display = 'block';
        });
    });
}

module.exports = (mainSlide);