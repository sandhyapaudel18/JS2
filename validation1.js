document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission when Enter is pressed
    }
  });

function validateForm(event) {

    // console.log("validateForm called");

    var isNameValid = validateName();
    var isUsernameValid = validateUsername();
    var isPasswordValid=validatePassword();
    var isconfirmpassword=validateConfirmPassword();
    var isphoneValid=validatePhone();
    var isemailValid=validateEmail();
    var isdobValid=validateDOB();
    var iscountryValid=validateCountry();
    var isgenderValid=validateGender();
    var isfacultyValid=validateFaculty();
    var isparahereValid=validateParahere();

    return isNameValid && isUsernameValid && isPasswordValid && isconfirmpassword &&  isphoneValid && isemailValid && isdobValid && iscountryValid && isgenderValid && isfacultyValid && isparahereValid;
}
function validateName(){
    var nameInput=document.getElementById('name');
    var namePattern=/^[A-Za-z\s]+$/;
    var nameError=document.getElementById("nameError");
    var nameValue=nameInput.value.trim();

    if(nameValue ===""){
        nameError.innerHTML="Cannot have empty field";
        return false;
    }

    else if(!namePattern.test(nameValue)){
        nameError.innerHTML="Invalid name";
        return false;

    }

    else if(nameValue.length<8){
        nameError.innerHTML="Insufficient letters";
        return false;

    }

    else{
        nameError.innerHTML="";
        return true;
    }

}

function validateUsername(){
    var usernameInput=document.getElementById("username");
    var usernamePattern=/^[A-Za-z0-9]+$/;
    var usernameValue=usernameInput.value.trim();
    var unameError=document.getElementById("unameError");
    


    
     if(usernameValue=== ""){
        unameError.innerHTML="Cannot Contain Empty Username";
        return false;
   }
     else if(!usernamePattern.test(usernameValue)){
        unameError.innerHTML="Invalid Username";
         return false;
    }
    else if(usernameValue.length < 8){
         unameError.innerHTML= "Insufficient letters";
        return false;
        
    }

    else if(usernameValue=== ""){
         unameError.innerHTML="Cannot Contain Empty Username";
         return false;
    }

    else{
         unameError.innerHTML="";
        return true;
    }

}
function validatePassword(){
    var passwordInput=document.getElementById("password");
    var passwordValue=passwordInput.value.trim();
    var pwError=document.getElementById("pwError");
    // var passwordPattern="";
 

    if(passwordValue === ""){
        pwError.innerHTML="Password is required";
        return false;
    }
    // else if(){

    // }
    else{
        pwError.innerHTML="";
        return true;
    }

}

function validateConfirmPassword(){
    var passwordValue=document.getElementById("password").value.trim();
    var confirmpasswordValue=document.getElementById("confirmpassword").value.trim();
    var cpwError=document.getElementById("cpwError");

    if(confirmpasswordValue===""){
        cpwError.innerHTML="Cannot have empty fieldset";
        return false;
    }

    //!== for string values
    //test=for pattern check only
    else if(passwordValue!== confirmpasswordValue){
        cpwError.innerHTML="Password donot match";
        return false;
    }

    else{
        cpwError.innerHTML="";
        return true;
    }
}

function validatePhone(){
    var phoneValue=document.getElementById("phone").value.trim();
    var phonePattern=/^[0-9]{10}$/;
    var phoneError=document.getElementById("phoneError");

    if(phoneValue=== ""){
        phoneError.innerHTML="Cannot have empty fieldset";
        return false;
    }
    else if(phoneValue.length!==10){
         phoneError.innerHTML="Invalid phone number";
         return false;
    }
    else{
        phoneError.innerHTML="";
        return true;
    }
}

function validateEmail(){
    var emailValue=document.getElementById("email").value.trim();
    var emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var emailError=document.getElementById("emailError");

    if(emailValue===""){
        emailError.innerHTML="Cannot have empty fieldset";
        return false;
    }

    else if(!emailPattern.test(emailValue)){
        emailError.innerHTML="Invalid email";
        return false;
    }

    else{
        emailError.innerHTML="";
        return true;
    }

}


// /^=starting
//[a-zA-Z0-9._%+-]=sandhya
//+@=@
//[a-zA-Z0-9.-]=gmail
//+\.[a-zA-Z]{2,}=.com
//$/=ending
function validateDOB(){
    var year = document.getElementById("year").value.trim();
    var month = document.getElementById("month").value.trim();
    var day = document.getElementById("day").value.trim();
    var dobError=document.getElementById("dobError");

    var yearPattern=/^[0-9]{4}$/;
    var monthPattern=/^[0-9]{2}$/;
    var dayPattern=/^[0-9]{1,2}$/;

    if(year ==="" ||  month ==="" || day ===""){
       dobError.innerHTML="Cannot have empty field";
       return false;

    }
    else if(isNaN(year) || isNaN(month) || isNaN(day)){
       dobError.innerHTML="Invalid date";
       return false;
    }
    else if(!yearPattern.test(year)){
        dobError.innerHTML="Invalid date";
        return false;
        }
  
    else if(!monthPattern.test(month)){
        dobError.innerHTML="Invalid date";
        return false;
        
    }

    else if(!dayPattern.test(day)){
        dobError.innerHTML="Invalid date";
        return false;
        
    }

        else{
            dobError.innerHTML="";
            return true;
        }
}

function validateCountry(){
    var countryValue=document.getElementById("country").value;
    var countryError=document.getElementById("countryError");

    if(countryValue===""){
        countryError.innerHTML="Choose the country";
        return false;
    }

    else{
   countryError.innerHTML="";
   return true;
    } 
    
}
function validateGender(){
 var genderValue=document.querySelector('input[name="gender"]:checked');
 var genderError=document.getElementById("genderError");

if(!genderValue){
    genderError.innerHTML="Please select an option";
    return false;

}
else{
    genderError.innerHTML="";
    return true;
}
}

function validateFaculty(){
    var facultyValue=document.querySelector('input[name="faculty"]:checked');
    var facultyError=document.getElementById("facultyError");

  if(!facultyValue){
    facultyError.innerHTML="Please select an option";
    return false;
  }

  else{
    facultyError.innerHTML="";
    return true;
  }
}

function validateParahere(){
    var parahereValue=document.querySelector('input[name="parahere"]:checked');
    var parahereErro=document.getElementById("parahereError");

    if(!parahereValue){
        parahereErro.innerHTML="Please select an option";
        return false;
    }
    else{
        parahereErro.innerHTML="";
        return true;
    }
}

