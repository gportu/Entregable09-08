const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validateEmail(email){
  return emailPattern.test(email);
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    setTimeout(() => {
        document.getElementById("alert-success").classList.remove("show");
    }, 1700)    
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    setTimeout(() => {
        document.getElementById("alert-danger").classList.remove("show");
    }, 3000)
}


document.getElementById("regBtn").addEventListener("click", () => {
    if(document.getElementById("nombre").value != "" &&
       document.getElementById("apellido").value != "" &&
       document.getElementById("email").value != "" &&
       validateEmail(document.getElementById("email").value) &&
       document.getElementById("password1").value.length >= 6 &&
       document.getElementById("password1").value === document.getElementById("password2").value &&
       document.getElementById("terminos").checked){
        showAlertSuccess();        
    }else{
        showAlertError();
    }
})