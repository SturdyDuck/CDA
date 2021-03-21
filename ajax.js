$(document).ready(function () {
    $("#ajax-form").submit(function (e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "form.php",
            data: form_data,
            success: function() {
                alert('Форма отправлена.');
            }
        })
    })
})