//Ejercicio 8??????:
const num1ex8=document.getElementById('number1-ex8');

const btnex8= document.getElementById('btn-number-ex8');
const resultnumberex8=document.getElementById('result-ex8');

btnex8.addEventListener('click', () => {
  const num1userex8 = num1ex8.value;

  let resultex8 = dividenumberex8 (num1userex8);
  
  resultnumberex8.innerHTML = 'El número es ' + resultex8;
})



function dividenumberex8(number1)
{

  for(let i = 0; i < number1.length ; i++)
  {
    if ((number1 % 2) === 0) {
        return "divisible entre 2";
    }

    if ((number1 % 3) === 0) {
      return "divisible entre 3";
  }

    if ((number1 % 5) === 0) {
        return "divisible entre 5";
    }

    if ((number1 % 7) === 0) {
        return "divisible entre 7";
    }

}

}