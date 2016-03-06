$(document).ready(function () {

    $('.question').click(
        function() {
            var esAnswer = $(this).parent().find('.answer');
            var esIconArrow = $(this).parent()  .find('.icon-arrow');
            if(esAnswer.hasClass('hidden')){
                esAnswer.removeClass('hidden');
                esAnswer.fadeIn();
                esIconArrow.removeClass('to-right');
                esIconArrow.addClass('to-bottom');

            } else {
                esAnswer.addClass('hidden');
                esAnswer.fadeOut();
                esIconArrow.removeClass('to-bottom');
                esIconArrow.addClass('to-right');
            }

        });

    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - $('.header').innerHeight()}, 800);
        return false;
    });

    $('.menu-icon').click(function() {
        if($(this).hasClass('hidden')){
            $('.logos').css('margin-bottom', '40px');
            $('nav ul').fadeIn();
            $(this).removeClass('hidden');
        } else {
            $('.logos').css('margin-bottom', '0');
            $('nav ul').css('display', 'none');
            $(this).addClass('hidden');
        }
    });

    $('.to-buy-now').click(function () {
        $('.window-payment').fadeIn();
    });
    $('.window-payment').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.payment-form')).length) $('.window-payment').fadeOut();
        if ($target.hasClass('.cancel')) $('.window-payment').fadeOut();
    });

    setTimeout(function(){
        $('.you-will-learn .picture-block').fadeIn(3000);
    },1500);

    $('.putPhone').mask("+7 (999) 999-99-99");

});
