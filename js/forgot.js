$(document).ready(function() {

    $("#captcha").click(function(){

        $("#theimage").css("display", "none");
        $("#theimage2").css("display", "block");

        });

        $("#email").focus(function(){
            $("#email-alert").css("display", "none");
            $("#null-alert").css("display", "none");
        });

        $("#submit").click(function(){
            var correct = true;

            if ($("#email").val().length === 0){
                $("#null-alert").css("display", "block");
                correct = false;
            }

            if(correct == true){
                alert("A password reset request has been emailed to you. Please follow the instructions in that email.");
                
                location.href = 'resetPwd.html';
            }
        });
        
});