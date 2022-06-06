//Ejercicio 2:
const num1ex2=document.getElementById('number1-ex2');
const num2ex2=document.getElementById('number2-ex2');
const num3ex2=document.getElementById('number3-ex2');

const btnex2= document.getElementById('btn-number-ex2');
const resultnumberex2=document.getElementById('result-ex2');

btnex2.addEventListener('click', () => {
  const num1userex2 = num1ex2.value;
  const num2userex2 = num2ex2.value;
  const num3userex2 = num3ex2.value;

  let resultex2 = gretternumberex2 (num1userex2, num2userex2, num3userex2);
  //console.log('numero 1: ' + num1user + 'numero 2: ' + num2user + 'numero 3: ' + num3user);
  
  resultnumberex2.innerHTML = 'El resultado es ' + resultex2;
})

function gretternumberex2 (number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
       return number1;
    }

    if (number2 > number1 && number2 > number3) {
        return number2;
    }
    if (number3 > number1 && number3 > number2) {
      return number3;
    }
}
//console.log(gretternumberex2(2,7,5));
