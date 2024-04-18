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


function limpiarPromedio() {
    var etiquetaContainer = document.getElementById("promedioContainer");
    etiquetaContainer.innerHTML = "";
}




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
        ingreso.type="number";
        ingreso.id= "nota"+numNota;
        ingreso.onchange = calcularPromedio;
        ingreso.className="cuadroinputsnotas"
        return ingreso;
    }
    else{
        var ingreso= document.createElement("input");
        ingreso.type="number";
        
        ingreso.oninput = calcularPromedio;
        ingreso.className="InputPromedio";
        return ingreso;
    }
    


}

var alertaMostrada = false;
function calcularPromedio() {
    var inputs = document.querySelectorAll('.cuadroinputsnotas');
    var porcentajeInputs = document.querySelectorAll('.InputPromedio');
    var totalPonderado = 0;
    var totalPorcentaje = 0;

    inputs.forEach(function(input, index) {
        var nota = parseFloat(input.value) || 0;
        var porcentaje = parseFloat(porcentajeInputs[index].value) || 0;

        if (totalPorcentaje + porcentaje > 100) {
            // Si la suma supera el 100%, eliminamos el último dígito del porcentaje
            var porcentajeString = porcentajeInputs[index].value;
            if (porcentajeString.length > 0) {
                porcentajeInputs[index].value = porcentajeString.slice(0, -1);
                porcentaje = parseFloat(porcentajeInputs[index].value) || 0;
                
                // Mostrar la alerta después de eliminar el último dígito
                if (!alertaMostrada) {
                    alert("Se eliminó el último dígito del porcentaje ingresado ya que supera el 100%");
                    alertaMostrada = true;
                }
            }
        }

        totalPonderado += nota * (porcentaje / 100);
        totalPorcentaje += porcentaje;
    });

    if (totalPorcentaje > 100) {
        if (!alertaMostrada) {
            alert("El total de los porcentajes no puede exceder el 100%");
            alertaMostrada = true;
        }
        return;
    }

    if (alertaMostrada) {
        alertaMostrada = false; // Restablecer la bandera si el total de porcentajes es válido
    }

    mostrarPromedio(totalPonderado.toFixed(2));
}

  function mostrarPromedio(promedio) {
    var promedioContainer = document.getElementById("promedioContainer");
    if (promedio>=39.6) {
        promedioContainer.style.color = "green";
        promedioContainer.textContent = `Promedio: ${promedio}`;
    }
    else if(promedio<39.6 & promedio>0 ){
        promedioContainer.style.color = "red";
        promedioContainer.textContent = `Promedio: ${promedio}`;
    }
    else{
        promedioContainer.style.color = "black";
        promedioContainer.textContent = `Promedio: ${promedio}`;
    }

    
  }