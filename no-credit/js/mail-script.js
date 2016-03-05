$(document).ready(function () {
    $("form").submit(function () {
        $('message').removeClass('success error');
        if ($('.message').hasClass('completed')){
            $('.message').addClass('success');
            $('.message').html("Данные уже были отправлены. Спасибо!");
            return false;
        }
        if($('.putName').val() == '' || $('.putPhone').val() == '' || $('.putEmail').val() == ''){
            return false;
        }
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $('.message').html(data);
                $('.message').addClass('success');
                $('.message').addClass('completed');
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $('.message').html(error);
                $('.message').addClass('error');
            }
        });
        return false;
    });
});