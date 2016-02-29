$(document).ready(function () {
    $('.question').click(
        function() {
            var esAnswer = $(this).parent().find('.answer');
            var esIconArrow = $(this).parent().find('.icon-arrow');
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
});
