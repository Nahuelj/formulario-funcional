function mostrar(valor){

    var mail ="";
    mail += valor;
    console.log(mail);
    document.querySelector("#formulario-grande").action = `https://formsubmit.co/${mail}`;
    console.log(document.querySelector("#formulario-grande").action);
}


