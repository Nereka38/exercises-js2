//Ejercicio 7:

const num1ex7=document.getElementById('number1-ex7');

const btnex7= document.getElementById('btn-number-ex7');
const resultnumberex7=document.getElementById('result-ex7');

btnex7.addEventListener('click', () => {
  const num1userex7 = num1ex7.value;

  let resultex7 = dividenumber (num1userex7);
  
  resultnumberex7.innerHTML = 'El número es ' + resultex7;
})

let number1=[num1ex7]; 

function dividenumber(number1)
{


  for(let i = 0; i < number1.length ; i++)
  {
    if ((number1 % 2 ) === 0) {
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
//console.log(dividenumber(14)); */