<!DOCTYPE html>
<html lang="en">
<head>
    <title>Log In</title>
    <meta charset='utf-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='Cache-Control' content='no-cache, no-store, must-revalidate'/>
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta http-equiv='Pragma' content='no-cache'>
    <link rel="shortcut icon" href="assets/images/favicon.png">
    <link href="assets/css/icons.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/style.css" rel="stylesheet" type="text/css" />
    <script src="assets/custom/plugins/theme/mytheme.js"></script>
    <link href="assets/custom/plugins/theme/mytheme.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="assets/login/login.css">
</head>
<body>
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <div class="fadeIn first">
                <img src="assets/images/e5logo.png" id="icon" alt="User Icon" />
            </div>
            <form name="loginForm" class="loginforms" action="/login" method="post">
                <input type="text" id="login" class="fadeIn second" name="email" placeholder="Your Username" required>
                <input type="password" id="password" class="fadeIn third" name="password" placeholder="Password" required style="margin-left: 6%;">
                <i class="fa fa-eye field-icon"></i>
                <div class="text-right">
                <a href="forgotpassword.html" class="text-dark forpw">Forgot your password ?</a>
                </div>
                <div id="msg" class="errormsg mt-0">
                    <span class="errors">Incorrect Login details!</span>
                </div>
                <input id="s" type="submit" class="submit-form-button fadeIn fourth" value="Login">
            </form>            
        </div>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>    
    <script src="js/Profile.js"></script>    
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/custom/plugins/showpassword/hideShowPassword.min.js"></script>
    <script src="assets/login/main.js"></script>
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        $('#login').focus();

        $(document).keypress(function(e){
            if(e.which == 13) { 
                $('form[name="loginForm"]').submit();
            }
        });

        $('#password + .fa').on('click', function() {
            $(this).toggleClass('fa-eye-slash').toggleClass('fa-eye');
            $('#password').togglePassword();
        });

        $('form[name="loginForm"]').on('submit', function(event) {
            event.preventDefault();
            var form = $(this);
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                success: function(response) {
                    if (response.role) {
                        localStorage.setItem('username', response.role);
                    }
                    window.location.href = response.redirectUrl;
                },
                error: function() {
                    $('#msg').show();
                }
            });
        });
    });

    </script>
</body>
</html>
