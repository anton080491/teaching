function form() {

    let messages = { // пишем все сообщения в объект
        loading: 'Загрузка',
        seccuss: 'Спасибо!',
        failer: 'Произошла ошибка'
    };

    let forms = document.querySelectorAll('.form'), // находим наши формы и инпуты
        input = document.querySelectorAll('input'),
        statusMessage = document.createElement('div'); //Создаем div для выода сообщений

    statusMessage.style.cssText = `
        margin-top: 15px;
        font-size: 18px;
        color: grey;
    `; 

    const mailInputs = document.querySelectorAll('[type="email"]');
    
    mailInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                e.preventDefault();
            }
        });
    });

    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) { //отпраавляем что то с формы
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', '/src/assets/question.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          

            let formData = new FormData(form); 
            request.send(formData);

           



            request.addEventListener('readystatechange', function () { // пишем условия для вывода определенных сообщений
                if (request.readyState < 4) {
                    statusMessage.innerHTML = messages.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = messages.seccuss;
                } else {
                    statusMessage.innerHTML = messages.failer;
                }
            });

            input.forEach(function (input) {
                input.value = '';
            });

            setTimeout(() => {
                statusMessage.remove();
            }, 6000);


        });
    });
}






module.exports = (form);