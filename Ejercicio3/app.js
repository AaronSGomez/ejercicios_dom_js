/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul= document.createElement('ul');
for(let i=0; i<countries.length; i++){
  const li= document.createElement('li');
  li.textContent= countries[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const removElement= document.querySelector('.fn-remove-me');
removElement.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const imprime=document.querySelector('[data-function="printHere"]');
console.log(imprime);
const ul1= document.createElement('ul');
for(let i=0; i< cars.length;i++){
  const li=document.createElement('li');
  li.textContent=cars[i];
  ul1.appendChild(li);
}
imprime.appendChild(ul1);

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const imgCountries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let i=0; i<imgCountries.length; i++){
  const div= document.createElement('div');
  div.classList= 'countries';
  const h4= document.createElement('h4');
  const img= document.createElement('img');
  div.appendChild(h4);
  div.appendChild(img);
  h4.textContent= imgCountries[i].title;
  img.src= imgCountries[i].imgUrl;
  document.body.appendChild(div);
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */
const btn= document.createElement('button');
const divCountries= document.querySelectorAll('.countries'); //seleccion de todos los divs countries, lo voy a usar abajo tambien
btn.textContent= 'Borrar ultimo div';
document.body.appendChild(btn);
btn.addEventListener('click',()=>{
  const eliminar= divCountries[divCountries.length-1];
  eliminar.remove();
})

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */
for(let i =0; i<divCountries.length; i++){
  const btnDiv= document.createElement('button');
  btnDiv.textContent='Borrar';
  divCountries[i].appendChild(btnDiv);
  btnDiv.addEventListener('click',()=>{
    divCountries[i].remove();
  })
}


