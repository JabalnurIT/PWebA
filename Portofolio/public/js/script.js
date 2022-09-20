// Toggle
const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}


$(window).scroll(function () {
    var winScroll = $(this).scrollTop();

    // Paralax Efect
    $('.bg').css({
        'transform': 'translate(0,' + winScroll / 12 + '%)'
    });
    $('.bg2').css({
        'transform': 'translate(0,' + winScroll / 14 + '%)'
    });
    $('.bg3').css({
        'transform': 'translate(0,' + winScroll / 20 + '%)'
    });
    $('.name').css({
        'transform': 'translate(0,' + winScroll / 14 + '%)'
    });
    $('.bg4').css({
        'transform': 'translate(0,' + winScroll / 26 + '%)'
    });
    $('.bg5').css({
        'transform': 'translate(0,' + winScroll / 32 + '%)'
    });

    // Navbar when scroll
    if (winScroll>parseInt($('.jumbotron').css('height'))){
        $('nav').css({
            'position': 'fixed'
        });
        $('nav').addClass('window-scroll')

    } else{
        $('nav').css({
            'position': 'absolute'
        });
        $('nav').removeClass('window-scroll')
    }

    

    
})

