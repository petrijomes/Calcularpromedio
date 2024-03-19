let titulo = document.querySelector('h1');
titulo.innerHTML= 'demuestra';

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