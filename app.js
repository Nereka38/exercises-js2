//Ejercicio 1:
const num1=document.getElementById('number1');
const num2=document.getElementById('number2');

const btn= document.getElementById('btn-number');
const resultnumber=document.getElementById('result');

btn.addEventListener('click', () => {
  const num1user = num1.value;
  const num2user = num2.value;

  let result = gretternumber (num1user, num2user);
  //console.log('numero 1: ' + num1user + 'numero 2: ' + num2user);
  
  resultnumber.innerHTML = 'El resultado es ' + result;
})

function gretternumber (number1, number2) {
    if (number1 > number2) {
       return number1;
    }
    if (number2 > number1) {
      return number2;
    }
     
}
//console.log(gretternumber(2,5,8));
 