/* //Primer ejercicio:
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
//console.log(gretternumber(2,5,8)); */

/* //Segundo Ejercicio:
const num1=document.getElementById('number1');
const num2=document.getElementById('number2');
const num3=document.getElementById('number3');

const btn= document.getElementById('btn-number');
const resultnumber=document.getElementById('result');

btn.addEventListener('click', () => {
  const num1user = num1.value;
  const num2user = num2.value;
  const num3user = num3.value;

  let result = gretternumber (num1user, num2user, num3user);
  //console.log('numero 1: ' + num1user + 'numero 2: ' + num2user + 'numero 3: ' + num3user);
  
  resultnumber.innerHTML = 'El resultado es ' + result;
})

function gretternumber (number1, number2, number3) {
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
//console.log(gretternumber(2,5,8)); */


/* //Tercer ejercicio:
let num1=document.getElementById('number1');

const resultnumber=document.getElementById('result');
const btn= document.getElementById('btn-number');

btn.addEventListener('click', () => {
  const num1user = num1.value;

  let result = divide2 (num1user);
  //console.log('numero 1: ' + num1user);
  
})

function divide2 (number1, number2) {

if ((number1 % 2) === 0) {
  resultnumber.innerHTML = 'Es divisible entre 2';
}

else {
  resultnumber.innerHTML = 'No es divisible entre 2';
}

} */

/* //Cuarto ejercicio??:
let inputplaceholder = document.getElementById('input-count');
let result = document.getElementById('result');
let btnvowel = document.getElementById('btn-vowel');

btnvowel.addEventListener('click', () => {
  const inputplaceholdervowel = inputplaceholder.value;


  let resultvowel = vowelcount (inputplaceholdervowel);
  result.innerHTML = 'La cantidad de A son: ' + resultvowel;
})

function vowelcount(str) {
  let vowels = 'aA';
  let vcount = 0;
  
  for(let i = 0; i < str.length ; i++)
  {
    if (vowels.indexOf(str[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
//console.log(vowelcount("ajaja")); */
 
/* //Quinto ejercicio:
let inputplaceholder = document.getElementById('input-count');
let result = document.getElementById('result');
let btnvowel = document.getElementById('btn-vowel');

btnvowel.addEventListener('click', () => {
  const inputplaceholdervowel = inputplaceholder.value;


  let resultvowel = vowelcount (inputplaceholdervowel);
  result.innerHTML = 'Número de vocales: ' + resultvowel;
})
function vowelcount(str)
{
  let vowels = 'aeiouAEIOU';
  let vcount = 0;
  
  for(let i = 0; i < str.length ; i++)
  {
    if (vowels.indexOf(str[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
//console.log(vowelcount("Hola")); */

//Sexto Ejercicio:
let inputplaceholder = document.getElementById('input-count');
let result = document.getElementById('result');
let btnvowel = document.getElementById('btn-vowel');

btnvowel.addEventListener('click', () => {
  const inputplaceholdervowel = inputplaceholder.value;

  let resultvowel = vowelcount (inputplaceholdervowel);
  result.innerHTML = 'Número de vocales: ' + resultvowel;
})

function vowelcount(str)
{
  let vowela = 'aA';
  let vcounta = 0;
  let vowele = 'eE';
  let vcounte = 0;
  let voweli = 'iI';
  let vcounti = 0;
  let vowelo = 'oO';
  let vcounto = 0;
  let vowelu = 'uU';
  let vcountu = 0;
  
  for(let i = 0; i < str.length ; i++)
  {
    if (vowela.indexOf(str[i]) !== -1)
    {
      vcounta += 1;
    }

    if (vowele.indexOf(str[i]) !== -1)
    {
      vcounte += 1;
    }

    if (voweli.indexOf(str[i]) !== -1)
    {
      vcounti += 1;
    }

    if (vowelo.indexOf(str[i]) !== -1)
    {
      vcounto += 1;
    }

    if (vowelu.indexOf(str[i]) !== -1)
    {
      vcountu += 1;
    }
  
  }
  return {vcounta, vcounte, vcounti, vcounto, vcountu};
}
//console.log(vowelcount("aaeiiouuu"));

/* //Séptimo y octavo ejercicio:
let num1 = document.getElementById('number1');


function dividenumber(num1)
{
    if ((num1%2) === 0) {
        document.write("El numero es divisible entre 2");
    }

    if ((num1%3) === 0) {
        document.write("El numero es divisible entre 3");
    }

    if ((num1%5) === 0) {
        document.write("El numero es divisible entre 5");
    }

    if ((num1%7) === 0) {
        document.write("El numero es divisible entre 7");
    }
}
console.log(dividenumber(14)); */

