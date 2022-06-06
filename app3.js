//Ejercicio 3:
let num1ex3=document.getElementById('number1-ex3');

const resultnumberex3=document.getElementById('result-ex3');
const btnex3= document.getElementById('btn-number-ex3');

btnex3.addEventListener('click', () => {
  const num1userex3 = num1ex3.value;

  let result = divide2 (num1userex3);
  //console.log('numero 1: ' + num1user);
  
})

function divide2 (number1) {

if ((number1 % 2) === 0) {
  resultnumberex3.innerHTML = 'Es divisible entre 2';
}

else {
  resultnumberex3.innerHTML = 'No es divisible entre 2';
}

}
