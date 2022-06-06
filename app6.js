//Ejercicio 6:
let inputplaceholderex6 = document.getElementById('input-count-ex6');
let resultex6 = document.getElementById('result-ex6');
let btnvowelex6 = document.getElementById('btn-vowel-ex6');



function vowelcountex6(str)
{
  btnvowelex6.addEventListener('click', () => {
    const inputplaceholdervowelex6 = inputplaceholderex6.value;
    
    let resultvowelex6 = vowelcountex6 (inputplaceholdervowelex6);
    
    resultvowelex6.innerHTML = 'Número de vocales: ' + obj.name;
  
  let vowela = 'aA';
  let a = 0;
  let vowele = 'eE';
  let e = 0;
  let voweli = 'iI';
  let i = 0;
  let vowelo = 'oO';
  let o = 0;
  let vowelu = 'uU';
  let u = 0;
  
  for(let i = 0; i < str.length ; i++)
  {
    if (vowela.indexOf(str[i]) !== -1)
    {
      a += 1;
    }

    if (vowele.indexOf(str[i]) !== -1)
    {
      e += 1;
    }

    if (voweli.indexOf(str[i]) !== -1)
    {
      i += 1;
    }

    if (vowelo.indexOf(str[i]) !== -1)
    {
      o += 1;
    }

    if (vowelu.indexOf(str[i]) !== -1)
    {
      u += 1;
    }
  
  }

  let obj = JSON.parse ({a, e, i, o, u});
  
})
}

//console.log(vowelcountex6("almuu"));