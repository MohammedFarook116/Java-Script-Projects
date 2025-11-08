

function check(){
    let email = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    function isValidEmail(email) {
  // Simple email pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
       
    if(email ===""){
        let display = document.getElementById("error-1");
        display.className = "errormsg";
        display.innerText = "Email cannot be empty";
    }
    else if (!isValidEmail(email)) {
        let display = document.getElementById("error-1");
        display.className = "errormsg";
        display.innerText = "Invalid email address";
       
    }
    
    if(password ===""){
        let display = document.getElementById("error-2");
        display.className = "errormsg";
        display.innerText = "password cannot be empty";
    }

}




 
