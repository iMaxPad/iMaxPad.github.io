$(document).ready(function(){
    $('.slider').slick({
            // dots: true,
            autoplay: true,
            speed: 2000,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_right"></span></button>',
            responsive: [
                {
                  breakpoint: 577,
                  settings: {
                    dots: true,
                    arrows: false,
                  }
                }
              ]
    });

    $('.testimonials__slider').slick({
      dots: true,
      autoplay: true,
      speed: 2000,
      arrows: false

      // responsive: [
      //     {
      //       breakpoint: 577,
      //       settings: {
      //         dots: true,
      //         arrows: false,
      //       }
      //     }
      //   ]
});
  });


  window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__list.xs_visible'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('hamburger_active');
                menu.classList.remove('header__list_active');
            });
        });
});