function player() {

    let btns = document.querySelectorAll('.play'),
        overlay = document.querySelector('.overlay'),
        close = overlay.querySelector('.close');
        let player;

    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (document.querySelector('iframe#player')) {
                overlay.style.display = 'flex';
            } else {
                
                player = new YT.Player('player', {
                    height: '100%',
                    width: '100%',
                    videoId: 'vZ4Sne0wdxY',
                });
                overlay.style.display = 'flex';
            }
        });
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        player.stopVideo();
    });




    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



}

module.exports = (player);