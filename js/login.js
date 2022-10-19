function checkaccount(name, password){
    if(name == "admin" && password == "admin"){
        return true;
    }
    if(name == "Tommer" && password == "Tommer123_"){
        return true;
    }
    if(name == "Tommer" && password == "Tommer4567_"){
        return true;
    }
    if(name == "staff" && password == "staff123_"){
        return true;
    }
    if(name == "staff" && password == "staff4567_"){
        return true;
    }
}

function checkstaff(name){
    if(name == "admin"){
        return "Admin";
    }
    if(name == "staff"){
        return "Staff";
    }
}

function firsttime(name, password){
    if(name == "staff" && password == "staff123_"){
        return true;
    }
}


$(document).ready(function() {

    $("#submit").click(function(){

        var name = $("#name").val();
        var pwd = $("#password").val();

        $("#null-alert").css("display", "none");
        $("#wrong-alert").css("display", "none");

        if (name.length === 0 ||
            pwd.length === 0 ){
            $("#null-alert").css("display", "block");
            return;
        }

        if(checkaccount(name, pwd)){
            

            if(firsttime(name, pwd)){
                location.href = 'resetPwd.html';
                alert("It is detected that you are logging in for the first time,\n please reset your password first.");

            } else if(checkstaff(name  == "Staff" )){
                location.href = 'staff_panel.html';
                alert("Welcome Staff "+name);

            } else if(checkstaff(name == "Admin")){
                location.href = 'admin_panel.html';
                alert("Welcome admin "+name);
            } else{
                location.href = 'flight_search.html';
                alert("Welcome user "+name);
            }
            
        } else{
            $("#wrong-alert").css("display", "block");
        }
        
    });

});