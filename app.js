document.addEventListener("DOMContentLoaded", function() {
    generar(); // Llama a la función generar() una vez que la página haya cargado completamente.
     // Obtener el primer input y centrar la página en él
     var primerInput = document.querySelector('.cuadroinputsnotas');
     if (primerInput) {
         primerInput.focus();
     }
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
    var cantidadInputs = inputContainer.getElementsByClassName("cuadroinputsnotas").length + 1;
    
    if (cantidadInputs<=9) {
            
        var nuevaEtiqueta = generaretiqueta(1,cantidadInputs);
        var NuevoInputNotas = generarInputs(1,cantidadInputs);
        var NuevoInputPorcentaje= generarInputs(2,cantidadInputs);
        var nuevaEtiquetaporcentaje= generaretiqueta(2,cantidadInputs)
        inputContainer.appendChild(nuevaEtiqueta);
        inputContainer.appendChild(NuevoInputNotas);
        inputContainer.appendChild(NuevoInputPorcentaje);
        inputContainer.appendChild(nuevaEtiquetaporcentaje);
        
        inputContainer.appendChild(document.createElement("br"));
        
        NuevoInputNotas.addEventListener("input", calcularPromedio);
    }
    else{
        alert("No se pueden agregar mas de 9 notas!");

    }
}


function generar(){
    var cantidadNotas = document.getElementById("ingresarnotas").value;
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Limpiar el contenido actual del contenedor
    var notas=1;
    var prome=2;
    for (var i = 1; i <= cantidadNotas; i++) {
        
            var nuevaEtiqueta = generaretiqueta(notas,i);
            var NuevoInputNotas = generarInputs(notas,i);
            var NuevoInputPorcentaje= generarInputs(prome,i);
            var nuevaEtiquetaporcentaje= generaretiqueta(prome,i);
            inputContainer.appendChild(nuevaEtiqueta);
            inputContainer.appendChild(NuevoInputNotas);
            inputContainer.appendChild(NuevoInputPorcentaje);
            inputContainer.appendChild(nuevaEtiquetaporcentaje);
            inputContainer.appendChild(document.createElement("br"));
    
            NuevoInputNotas.addEventListener("input", calcularPromedio);            
      

    }

}

function generaretiqueta(control,numNota){
    if (control==1) {
        var etiqueta= document.createElement("label");
        etiqueta.for= "nota"+numNota;
        etiqueta.className="etiquetainputs";
        etiqueta.textContent= `Nota ${numNota}: `;
        
        
        return etiqueta;   
    }
    else{
        var etiqueta= document.createElement("label");
        etiqueta.for= "promedio"+numNota;
        etiqueta.className="etiquetanotas";
        etiqueta.textContent= "%";
        return etiqueta;
    }
    
}
function generarInputs(control, numNota){
    if (control==1) {
        var ingreso= document.createElement("input");
        ingreso.type="text";
        ingreso.id= "nota"+numNota;
        ingreso.className="cuadroinputsnotas"
        return ingreso;
    }
    else{
        var ingreso= document.createElement("input");
        ingreso.type="text";
        ingreso.id= "promedio"+numNota;
        ingreso.className="InputPromedio";
        return ingreso;
    }
    


}

function calcularPromedio() {
    var inputs = document.querySelectorAll('.cuadroinputsnotas');
    var porcentajeInputs= document.querySelectorAll('.InputPromedio')
    var totalPonderado = 0;
    var totalPorcentaje = 0;
  
    inputs.forEach(function(input, index) {
        
        if (totalPorcentaje<=100) {
            var nota = parseFloat(input.value) || 0;
            var porcentaje = parseFloat(porcentajeInputs[index].value) || 0;

            totalPonderado += nota * (porcentaje / 100); // Calculamos el producto de la nota por el porcentaje (dividido por 100)
            totalPorcentaje += porcentaje; // Sumams los porcentajes
            
        }
        else{
            alert("porcentaje mayor que 100")
        }
        
    });
  
    mostrarPromedio(totalPonderado.toFixed(2));
}

  
  function mostrarPromedio(promedio) {
    var promedioContainer = document.getElementById("promedioContainer");
    promedioContainer.textContent = `Promedio: ${promedio}`;
  }