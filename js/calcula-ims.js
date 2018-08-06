var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');


for(var i = 0; i < pacientes.length; i++){

    paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!validaAltura){
        console.log("altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if(pesoEhValido && alturaEhValida){
        var imc = calcumaImc(peso, altura);
         tdImc.textContent = imc; 
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000){
    return true;
    } else {
        return false;
    }
}

function validaAltura (altura){
    if (altura >=0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}
function validaGordura (gordura){
    if(gordura >=0 && gordura < 50){
        return true;
    } else {
        return false;
    }
}

function calcumaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}