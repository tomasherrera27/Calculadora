let displayValorAnterior = document.getElementById("valorAnterior")
let displayValorActual = document.getElementById("valorActual")
let botonesNumeros = document.querySelectorAll(".numero");
let botonesOperadores = document.querySelectorAll(".operador");
const calculadora = new Calculadora();
const display = new Display(displayValorAnterior, displayValorActual)
botonesNumeros.forEach(boton => {
    boton.addEventListener("click", ()=> display.agregarNumero(boton.innerHTML));
});
botonesOperadores.forEach(boton =>{
    boton.addEventListener("click", () => display.computar(boton.value));
    
});