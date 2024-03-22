$(document).ready(function () {
    $('body').css('visibility','visible');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $(".header").fadeOut(600);
        } else {
            $(".header").fadeIn(600);
        }
    });

    $(".scroll-btn").click(function () {
        $('html,body').animate({ scrollTop: $(".main-content").offset().top - 50 }, 400)
    });
//===============swiper==============//
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

})