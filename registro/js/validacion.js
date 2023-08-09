function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const contrasena1= document.getElementById("password1")
const contrasena2= document.getElementById("password2")

const botonRegistro= document.getElementById("regBtn")

function verificar(){
    if(contrasena1.value===contrasena2.value && contrasena1.value !== "" 
    && contrasena2.value !== "") {
        showAlertSuccess()}
        else {showAlertError()

        }}

botonRegistro.addEventListener("click",verificar)

