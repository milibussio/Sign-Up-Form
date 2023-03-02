let clave1 = document.getElementById("contraseña1");
let clave2 = document.getElementById("contraseña2");

document.addEventListener('keyup', function(e){
    setTimeout(validarPswd, 3000)
});

function validarPswd(){
    if (clave2.value != "" && clave1.value == clave2.value){
        console.log("entro a valido");
        clave1.classList.remove("invalid");
        clave2.classList.remove("invalid");
    } else if (clave2.value != "" && clave1.value != clave2.value) {
        console.log("no entro a valido");
        clave1.classList.add("invalid");
        clave2.classList.add("invalid");
    } 
};

