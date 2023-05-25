const contador = document.getElementById('contar')
const sumar = document.getElementById('Decrement')
const restar = document.getElementById('Reset')
const reset = document.getElementById('Increment')

let numero = 0;

sumar.addEventListener("click", () => {
    numero++;
    contador.innerHTML = numero
});

restar.addEventListener("click", () => {
    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }
})

reset.addEventListener("click", () => {
    numero = 0 
    contador.innerHTML = numero
})
 