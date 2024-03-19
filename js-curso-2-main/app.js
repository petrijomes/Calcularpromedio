let titulo = document.querySelector('h1');
titulo.innerHTML= 'Calcular promedio';

function mensajeConsola() {
    console.log('Boton Console fue clickeado')
    
}

function mensajePrompt() {
    var ciudad= prompt("ingresa el nombre de una ciudad en chile:");
    alert(`estuve en ${ciudad} y me acordé de ti`);
    
}
function mensajeAlerta() {
    alert("Yo amo JS");
}

function mensajeSuma() {
    var num1= prompt("ingresa el primer numero:");
    var num2= prompt("ingresa el segundo numero:");
    alert(`la suma es: ${parseInt(num1)+parseInt(num2)}`)
}
function generar(){
    var cantidadNotas = document.getElementById("ingresarnotas").value;
    alert(`seleccionaste ${cantidadNotas}`)
    var inputContainer= document.getElementById("inputContainer");
    inputContainer.innerHTML = "";
    for(var i =1;i <=cantidadNotas;i++){
    var nuevaEtiqueta= generaretiqueta(i);        
    var nuevoInput= generarInputs(i);
     var nuevaEtiquetaPorcentaje = generaretiqueta(i, "Porcentaje (%)");
    var nuevoInputPorcentaje = generarInputs(i, "porcentaje");
    inputContainer.appendChild(nuevaEtiqueta);
    inputContainer.appendChild(nuevoInput);

   

    inputContainer.appendChild(document.createElement("br"));

    nuevoInput.addEventListener("input", calcularPromedio)
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
    var cantidadInputs = inputs.length;
  
    inputs.forEach(function(input) {
      total += parseFloat(input.value) || 0; // Convertir el valor a número
    });
  
    var promedio = total / cantidadInputs || 0; // Evitar división por cero
    mostrarPromedio(promedio.toFixed(2)); // Mostrar el promedio con dos decimales
  }
  
  function mostrarPromedio(promedio) {
    var promedioContainer = document.getElementById("promedioContainer");
    promedioContainer.textContent = `Promedio: ${promedio}`;
  }