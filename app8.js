//Ejercicio 8:
const num1ex8=document.getElementById('number1-ex8');

const btnex8= document.getElementById('btn-number-ex8');
const resultnumberex8=document.getElementById('result-ex8');



function dividenumbers () {
btnex8.addEventListener('click', () => {

  let number1 = num1ex8.value;

  let i = 1;

    for (i = 1; i<= number1; i++) {
      if (number1 % i === 0) {dividelist(i)}
      
    }
})
}
dividenumbers();

function dividelist (i) {
  resultnumberex8.innerHTML += "</p> Es divisible por: " + i + "</p>";
}