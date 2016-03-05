$(document).ready(function () {

    $('.question-answer li').click(
        function() {
            var esAnswer = $(this).find('.answer');
            var esIconArrow = $(this).find('.icon-arrow');
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


});
