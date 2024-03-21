document.addEventListener("DOMContentLoaded", function() {
    generar(); // Llama a la función generar() una vez que la página haya cargado completamente.
});


let titulo = document.querySelector('h1');
titulo.innerHTML= 'Calcular promedio';

// function mensajeConsola() {
//     console.log('Boton Console fue clickeado')
    
// }

// function mensajePrompt() {
//     var ciudad= prompt("ingresa el nombre de una ciudad en chile:");
//     alert(`estuve en ${ciudad} y me acordé de ti`);
    
// }
// function mensajeAlerta() {
//     alert("Yo amo JS");
// }

// function mensajeSuma() {
//     var num1= prompt("ingresa el primer numero:");
//     var num2= prompt("ingresa el segundo numero:");
//     alert(`la suma es: ${parseInt(num1)+parseInt(num2)}`)
// }
function agregarNuevoInput() {
    var inputContainer = document.getElementById("inputContainer");
    var cantidadInputs = inputContainer.querySelectorAll("input").length + 1;
    if (cantidadInputs<=9) {
            
        var nuevaEtiqueta = generaretiqueta(cantidadInputs);
        var nuevoInput = generarInputs(cantidadInputs);
        inputContainer.appendChild(nuevaEtiqueta);
        inputContainer.appendChild(nuevoInput);
        inputContainer.appendChild(document.createElement("br"));
        
        nuevoInput.addEventListener("input", calcularPromedio);
    }
    else{
        alert("No se pueden agregar mas de 9 notas!");

    }
}


function generar(){
    var cantidadNotas = document.getElementById("ingresarnotas").value;
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Limpiar el contenido actual del contenedor
    
    for (var i = 1; i <= cantidadNotas; i++) {
        
            var nuevaEtiqueta = generaretiqueta(i);
            var nuevoInput = generarInputs(i);
            inputContainer.appendChild(nuevaEtiqueta);
            inputContainer.appendChild(nuevoInput);
            inputContainer.appendChild(document.createElement("br"));
    
            nuevoInput.addEventListener("input", calcularPromedio);            
      

    }

}

function generaretiqueta(numNota){
    var etiqueta= document.createElement("label");
    etiqueta.for= "nota" + numNota;
    etiqueta.textContent= `Nota ${numNota}: `;
    return etiqueta;
}
function generarInputs(numNota){
    var ingreso= document.createElement("input");
    ingreso.type="text";
    ingreso.id= "nota"+numNota;
    return ingreso;


}

function calcularPromedio() {
    var inputs = document.querySelectorAll("#inputContainer input");
    var total = 0;
    var cantidadInputs = 0;
  
    inputs.forEach(function(input) {
        if(input.value !== "") {
            total += parseFloat(input.value) || 0;
            cantidadInputs++;
        }
    });
  
    var promedio = total / cantidadInputs || 0;
    mostrarPromedio(promedio.toFixed(2));
}

  
  function mostrarPromedio(promedio) {
    var promedioContainer = document.getElementById("promedioContainer");
    promedioContainer.textContent = `Promedio: ${promedio}`;
  }