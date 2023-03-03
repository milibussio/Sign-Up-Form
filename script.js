let clave1 = document.getElementById("contraseña1");
let clave2 = document.getElementById("contraseña2");
let inputs = document.querySelectorAll("input");
let advertencias = document.querySelectorAll(".advertencia");

document.addEventListener('keyup', function(e){
    const casilla = e.srcElement.id;
    if (casilla == "nombre"){advertenciaNombre(inputs[0].value)};
    if (casilla == "apellido"){advertenciaApellido(inputs[1].value)};
    if (casilla == "mail"){advertenciaMail(inputs[2].value)};
    if (casilla == "telefono"){advertenciaTel(inputs[3].value)};
    validarPswd();
});

function validarPswd(){
    if (clave2.value != "" && clave1.value == clave2.value){
        clave1.classList.remove("invalid");
        clave2.classList.remove("invalid");
        advertencias[5].textContent = "";
    } else if (clave2.value != "" && clave1.value != clave2.value) {
        clave1.classList.add("invalid");
        clave2.classList.add("invalid");
        advertencias[5].textContent = "** las claves no coinciden";
    } 
    if (clave2.value == ""){advertencias[5].textContent = "";}
};

function advertenciaNombre(nombre){
    if (nombre.length > 0 && nombre.length < 2){
        advertencias[0].textContent = "** mínimo 2 carácteres"
    } else if (inputs[0].matches(":invalid")){
        advertencias[0].textContent = "** solo letras o espacios"
    }
    else {advertencias[0].textContent = ""}
    if (nombre.length == 0){advertencias[0].textContent = ""}
}

function advertenciaApellido(apellido){
    if (apellido.length > 0 && apellido.length < 2){
        advertencias[1].textContent = "** mínimo 2 carácteres"
    } else if (inputs[1].matches(":invalid")){
        advertencias[1].textContent = "** solo letras o espacios"
    }
    else {advertencias[1].textContent = ""}
    if (apellido.length == 0){advertencias[1].textContent = ""}
}

function advertenciaMail(mail){
    if (inputs[2].matches(":invalid")){
        advertencias[2].textContent = "** correo no válido"
    } 
    else {advertencias[2].textContent = ""}
    if (mail.length == 0){advertencias[2].textContent = ""}
}

function advertenciaTel(tel){
    if (inputs[3].matches(":invalid")){
        advertencias[3].textContent = "** 9 seguido de ocho números"
    } 
    else {advertencias[3].textContent = ""}    
    if (tel.length == 0){advertencias[3].textContent = ""}
}


