//Ejercicio 4:
let inputplaceholderex4 = document.getElementById('input-count-ex4');
let resultex4 = document.getElementById('result-ex4');
let btnvowelex4 = document.getElementById('btn-vowel-ex4');

btnvowelex4.addEventListener('click', () => {
  const inputplaceholdervowelex4 = inputplaceholderex4.value;


  let resultvowelex4 = vowelcount (inputplaceholdervowelex4);
  resultex4.innerHTML = 'La cantidad de A son: ' + resultvowelex4;
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