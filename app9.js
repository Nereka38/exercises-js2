//Ejercicio 9:
const num1ex9=document.getElementById('number1-ex9');

const btnex9= document.getElementById('btn-number-ex9');
const resultnumberex9=document.getElementById('result-ex9');

btnex9.addEventListener('click', () => {
  const num1userex9 = num1ex9.value;

  let resultex9 = divisornumber(num1userex9);
  
  resultnumberex9.innerHTML = 'El número es ' + resultex9;
})


function divisornumber(number) {
for(let i = 1; i <= number; i++){
    if(number % i == 0){
        console.log(i);
    }
}
}
