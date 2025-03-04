/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */
const div = document.createElement('div');
document.body.appendChild(div);
div.textContent = 'nuevo div creado en el 2.1';

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
const div2 = document.createElement('div');
document.body.appendChild(div2);
div2.innerHTML = '<p>nuevo div creado en el 2.2</p>';

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript. */
const div3=document.createElement('div');
document.body.appendChild(div3);
for(let i=0;i<6;i++){
	const p=document.createElement('p');
	div3.appendChild(p);
	p.textContent='parrafo '+(i+1)+' creado en el 2.3';
	}

/* 2.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */
const p = document.createElement('p');
document.body.appendChild(p);
p.textContent = 'Soy dinámico!';

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const h2 =document.createElement('h2');
document.body.appendChild(h2);
h2.textContent='Wubba Lubba dub dub';

/* 2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul=document.createElement('ul');
for(let i=0; i<apps.length; i++){
	const li= document.createElement('li');
	ul.appendChild(li);
	li.textContent=apps[i];
}
document.body.appendChild(ul);

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
const borrar=document.querySelectorAll('.fn-remove-me');
for(let i=0; i<borrar.length;i++){
	borrar[i].remove();
}


/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */
const p2 = document.createElement('p');
p2.textContent ='Voy en medio!';
document.body.insertBefore(p2,div3);

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */

	const insertar=document.querySelectorAll('div.fn-insert-here'); //sin espacios entre div y class, con espacio no funciona
	//console.log(insertar.length);
	for(let i =0; i<insertar.length; i++){
		const p3=document.createElement('p');
		p3.textContent='Voy dentro!';
		console.log(insertar[i]);
		insertar[i].appendChild(p3);
	}