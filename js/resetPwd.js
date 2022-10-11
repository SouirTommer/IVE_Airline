$(document).ready(function() {

    $("#captcha").click(function(){

        $("#theimage").css("display", "none");
        $("#theimage2").css("display", "block");

    });

    $("#submit").click(function(){
        var correct = true;
        if ($("#password").val().length === 0 || $("#repassword").val().length === 0 ){
            $("#null-alert").css("display", "block");
            correct = false;
        }
        if ($("#password").val() != $("#repassword").val()){
            $("#pwd-alert").css("display", "block");
            correct = false;
        }

        if(correct == true){
            alert("Saved Successfully!");

            location.href = 'login.html';
        }
        
    });

});