/* //creo unos div para contener el input y los botones
const casillas=document.querySelectorAll('input');
for(let i=0; i<casillas.length;i++){
  const div= document.createElement('div');
  div.id='div'+(i+1);
  div.appendChild(casillas[i]);
  document.body.appendChild(div);
} */

/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

const btn1=document.createElement('button');
btn1.id='btnToClick';
btn1.textContent='cuentaClicks';
/* const div1= document.querySelector('#div1');
div1.appendChild(btn1); */
document.body.appendChild(btn1);
let contClick=0;
const input1= document.querySelector('.click');
input1.value="Contador de clicks";
btn1.addEventListener('click',()=>{
  //console.log('click');
  contClick++;
  input1.value=contClick;
})

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */
const input2= document.querySelector('.focus');
let contFocus=0;
input2.value="Contador de focus";
const p= document.createElement('p');
document.body.appendChild(p);
p.textContent="Aqui contamos Focus";
btn1.addEventListener('focus',()=>{
  //console.log('focus');
  contFocus++;
  input2.value=contFocus;
})


/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */
const input3= document.querySelector('.value');
let contValue=0;
input3.value="Contador de Value";
const p1= document.createElement('p');
document.body.appendChild(p1);
p1.textContent="Aqui contamos Value";
input3.addEventListener('input',()=>{
  console.log('input');
  contValue++;
  p1.textContent="El contador de valores es "+contValue;
})

/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul= document.createElement('ul');
const li= document.createElement('li');
li.textContent= ' Dinamic Albums ';
li.id='albums';
ul.appendChild(li);
for(let i=0;i<albums.length;i++){
  const li= document.createElement('li');
  li.textContent=albums[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);