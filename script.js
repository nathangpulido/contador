var contador = 0;
let cont = document.getElementsByTagName('h1');
const decremento = document.getElementById('decrementar').addEventListener('click',() =>{
    contador -= 1;   
    document.getElementById('span').textContent = `${contador}`;
});
const incremento = document.getElementById('incrementar').addEventListener('click',() =>{
    contador += 1;   
    document.getElementById('span').textContent = `${contador}`;
});
const resetar = document.getElementById('resetar').addEventListener('click',() =>{
    contador = 0;   
    document.getElementById('span').textContent = `${contador}`;
});


