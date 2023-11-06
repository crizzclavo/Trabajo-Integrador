
const valorTicket = 200;


let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");





btnResumen.addEventListener('click', totalPagar);



btnBorrar.addEventListener('click', borrar);





function borrar() {
    quitarClaseError();
    totalPago.innerHTML = " ";
}

function totalPagar() {

    quitarClaseError();

    if (nombre.value ==="") {
        
        alert("Por favor complete el formulario, escriba­ su nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return
    }

    if (apellido.value === "" ) {
        alert("Por favor complete el formulario, escriba­ su apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor complete el formulario, escriba su email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Por favor, ingrese la cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }
    
    if (categoria.value == "") {
        alert("Por favor, seleccione una categorí­a.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

   
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    
    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - ( (80 / 100) * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (50/ 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (15 / 100 * totalValorTickets);
    }

    
    totalPago.innerHTML = totalValorTickets;
}
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}