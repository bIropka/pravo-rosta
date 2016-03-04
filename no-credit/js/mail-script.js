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
                $('.message').html(data);
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $('.message').html(error);
            }
        });
        return false;
    });
});