$(document).ready(function() {
    $('.phonemask').inputmask('+7(999)999-99-99');
    $(document).on('opening', '.remodal', function() {
        $('.wrapper').addClass('blured');
    });

    $(document).on('closing', '.remodal', function(e) {
        $('.wrapper').removeClass('blured');
    });
    $('#callme').submit(function() {
        var str = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '../src/php/callme.php',
            data: str,
            success: function(html) {
                $('#callme').html('<p class="confirm confirm-modal">Спасибо, мы скоро с Вами свяжемся</p>');
                // yaCounter45993639.reachGoal('send_form_calc');
            }
        });
        return false;
    });
    $('#register').submit(function() {
        var str = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '../src/php/register.php',
            data: str,
            success: function(html) {
                $('#register').html('<p class="confirm confirm-modal">Спасибо,<br/>мы скоро с Вами свяжемся</p>');
                // yaCounter45993639.reachGoal('send_form_calc');
            }
        });
        return false;
    });
    $('input[type="text"], input[type="email"], input[type="password"]').on('change', function() {
        $this = $(this);
        if ($this.val() != '') {
            $this.addClass('not-empty');
        } else {
            $this.removeClass('not-empty');
        }
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: 160
        },
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 640px
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});