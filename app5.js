//Ejercicio 5:
let inputplaceholderex5 = document.getElementById('input-count-ex5');
let resultex5 = document.getElementById('result-ex5');
let btnvowelex5 = document.getElementById('btn-vowel-ex5');

btnvowelex5.addEventListener('click', () => {
  const inputplaceholdervowelex5 = inputplaceholderex5.value;


  let resultvowelex5 = vowelscount (inputplaceholdervowelex5);
  resultex5.innerHTML = 'Número de vocales: ' + resultvowelex5;
})

function vowelscount(vowel)
{
  let vowels = 'aeiouAEIOU';
  let vcount = 0;
  
  for(let i = 0; i < vowel.length ; i++)
  {
    if (vowels.indexOf(vowel[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
//console.log(vowelscount("Hola que tal"));