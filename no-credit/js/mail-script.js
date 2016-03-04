$(document).ready(function () {
    $("form").submit(function () {
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
                //$(formNm).html(data);
                $('.error-message').css('display', 'none');
                $('.success-message').fadeIn();
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                //$(formNm).html(error);
                $('.success-message').css('display', 'none');
                $('.error-message').fadeIn();
            }
        });
        return false;
    });
});