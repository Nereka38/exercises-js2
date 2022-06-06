//Ejercicio 10:
const num1ex10=document.getElementById('number1-ex10');
const num2ex10=document.getElementById('number1-ex10');

const btnex10= document.getElementById('btn-number-ex10');
const resultnumberex10=document.getElementById('result-ex10');

btnex10.addEventListener('click', () => {
  const num1userex10 = num1ex10.value;
  const num2userex10 = num2ex10.value;

  let resultex10 = MCD (num1userex10, num2userex10);
  
  resultnumberex10.innerHTML = 'El divisor común es ' + resultex10;
})

function MCD (num1, num2) {
  let divisor;
  while (num2 !== 0) {
      divisor = num2;
      num2 = num1 % num2;
      num1 = divisor;
  }
  return num1;
}

//console.log(MCD(32,45));