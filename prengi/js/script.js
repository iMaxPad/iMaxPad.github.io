  $(document).ready(function() {
    $('.promo__carousel').slick(
        {
            dots: true,
            speed: 1000,
            fade: true,
            // cssEase: 'linear',
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_right"></span></button>',
            responsive: [
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1 ,
                  arrows: false
                }
              }
            ]
        }
    );

    $('ul.decisions__list').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('decisions__item_active').siblings().removeClass('decisions__item_active')
          .closest('div.container').find('div.decisions__content').removeClass('decisions__content_active').eq($(this).index()).addClass('decisions__content_active');
      });

      $( ".header__contact" ).click(function() {
        $( ".header__dropdown" ).fadeToggle( "fast");
      });

      $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup'). fadeOut();
        }
    });

      $("a[href='#up']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
      });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header-bottom__menu'),
  menuItem = document.querySelectorAll('.header-bottom__item'),
  hamburger = document.querySelector('.hamburger');
  closeElem = document.querySelector(".close");

  hamburger.addEventListener('click', () => {
      hamburger.classList.add('hamburger_active');
      menu.classList.add('header-bottom__menu_active');
  });
  
  closeElem.addEventListener ('click', () => {
    menu.classList.remove("header-bottom__menu_active");
});

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.remove('hamburger_active');
          menu.classList.remove('header-bottom__menu_active');
      });
  });
});

const slider_production = tns({
    container: '.decisions__content_production',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 1500,
    nav: false,
    controls: false,
    navPosition: 'bottom',
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    responsive: {
      320: {
          nav: true
      },
      576: {
          nav: true
      },
      768: {
          nav: true
      },
      1230: {
          nav: true
      },
      1348: {
        nav: false,
    }
    }
  });

  const slider_fmc = tns({
    container: '.decisions__content_fmc',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 1500,
    nav: false,
    controls: false,
    navPosition: 'bottom',
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
     responsive: {
      320: {
          nav: true
      },
      576: {
          nav: true
      },
      768: {
          nav: true
      },
      1230: {
          nav: true
      },
      1348: {
        nav: false,
    }
    }
  });

  const slider_retail = tns({
    container: '.decisions__content_retail',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 1500,
    nav: false,
    controls: false,
    navPosition: 'bottom',
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
     responsive: {
      320: {
          nav: true
      },
      576: {
          nav: true
      },
      768: {
          nav: true
      },
      1230: {
          nav: true
      },
      1348: {
        nav: false,
    }
    }
  });

  const slider_logistic = tns({
    container: '.decisions__content_logistic',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 1500,
    nav: false,
    controls: false,
    navPosition: 'bottom',
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
     responsive: {
      320: {
          nav: true
      },
      576: {
          nav: true
      },
      768: {
          nav: true
      },
      1230: {
          nav: true
      },
      1348: {
        nav: false,
    }
    }
  });

  const slider_it = tns({
    container: '.decisions__content_it',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 1500,
    nav: false,
    controls: false,
    navPosition: 'bottom',
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
     responsive: {
      320: {
          nav: true
      },
      576: {
          nav: true
      },
      768: {
          nav: true
      },
      1230: {
          nav: true
      },
      1348: {
        nav: false,
    }
    }
  });

  const slider_hr = tns({
    container: '.decisions__content_hr',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 1500,
    nav: false,
    controls: false,
    navPosition: 'bottom',
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
     responsive: {
      320: {
          nav: true
      },
      576: {
          nav: true
      },
      768: {
          nav: true
      },
      1230: {
          nav: true
      },
      1348: {
        nav: false,
    }
    }
  });





  document.querySelector('.prev').onclick = function () {
    slider_fmc.goTo('prev');
    slider_production.goTo('prev');
    slider_retail.goTo('prev');
    slider_logistic.goTo('prev');
    slider_it.goTo('prev');
    slider_hr.goTo('prev');

  };

  document.querySelector('.next').onclick = function () {
    slider_fmc.goTo('next');
    slider_production.goTo('next');
    slider_retail.goTo('next');
    slider_logistic.goTo('next');
    slider_it.goTo('next');
    slider_hr.goTo('next');
  };

  new WOW().init();



