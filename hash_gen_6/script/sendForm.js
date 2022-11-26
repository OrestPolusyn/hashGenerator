$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../script/email.php", //Change
            data: th.serialize()
        }).done(function() {
            $('#email-copy')[0].value = "";
            $('#first-name_title')[0].value = "";
            $('#last-name_title')[0].value = "";
            $('#admin_email')[0].value = "";
        });
        return false;
    });

});