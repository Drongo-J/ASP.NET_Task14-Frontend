var API_SIGN_IN_REQUEST_URL = "https://localhost:7100/api/Auth/login";

$(document).ready(function () {
    $("#myform").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        var username = $("#username").val();
        var password = $("#password").val();

        var obj = {
            username: username,
            password: password
        };


        $.ajax({
            url: API_SIGN_IN_REQUEST_URL,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(obj),
            success: function (data) {
                console.log(data);
                TOKEN = data;
                localStorage.setItem("MYTOKEN", TOKEN);
                document.location.href = "requests.html";
                // Next page
            },
            error: function (error) {
                alert(error.responseJSON.title);
            }
        });
    });
});