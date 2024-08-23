function validateForm(){
    var nameInput = document.getElementById("name");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var confirmpassword = document.getElementById("confirmpassword");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var year = document.getElementById("year");
    var month = document.getElementById("month");
    var day = document.getElementById("day");
    var country = document.form.Country.value;
    var gender = document.form.gender.value;
    var faculty = document.form.faculty.value;
    var msg="";

    //validation the name which must be there and must be of 8 characters
     var namePattern=/^[A-Za-z\s]+$/;
     var error = document.getElementById("nameError");
     var nameValue = nameInput.value.trim();

    if(nameValue ===" "){
     error.innerHTML="Enter the name";
     return false;
    }

    else if(nameValue.length<8){
        error.innerHTML="Insufficient Letters";
        return false;
        
    }

    else if(!namePattern.test(nameValue)){
            error.innerHTML="Invalid Name";
            return false;
    }
    else{
        error.innerHTML = "";
       return true;
    }

      }