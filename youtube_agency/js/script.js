$(document).ready(function(){
    $('ul.use-case__tabs').on('click', 'li:not(.use-case__item_active)', function() {
        $(this)
          .addClass('use-case__item_active').siblings().removeClass('use-case__item_active')
          .closest('div.container').find('div.use-case__content').removeClass('use-case__content_active').eq($(this).index()).addClass('use-case__content_active');
    });

    $('.reviews__content').slick({
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-circle-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-circle-right"></span></button>',
        speed: 1000,
        responsive: [
            {
              breakpoint: 575,
              settings: {
                dots: true,
                arrows: false,
              }
            }
          ]
        });





      $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup'). fadeOut();
        }
    });

    $("a[href='#up']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
   
});

window.addEventListener('DOMContentLoaded', () => {
    const 
    menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__li'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('header__menu_active');
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
               name: "required",
               phone: "required",
               website: "required",
               email: {
                   required: true,
                   email: true
               }
            },
            messages: {
                name: "Please, write your name",
                phone: 'Please, write your phone',
                email: {
                  required: "Please, write your email",
                  email: "Incorrect email"
                },
                website: 'Please, write your website',
              }
        });
    };
    validateForms('#apply-form');

    $('input[name=phone]').mask("+38(099) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
});

$('.modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut('slow');
});

$('.header__lang').on('click', function() {
    $('.header__lang-dropdown').toggle();;
});
});

