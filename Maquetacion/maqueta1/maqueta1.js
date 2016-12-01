
var pila = [];
var cola = [];


function load(){
	//displays
	
	//botones
		//cola
		document.querySelector('button[agregarCola]').onclick = function(){
			agregarCola();
		}
		document.querySelector('button[sacarCola]').onclick = function(){
			sacarCola();
		}
		document.querySelector('button[mostrarPrimero]').onclick = function(){
	 		console.log(cola[0]);
		}
		document.querySelector('button[mostrarUltimo]').onclick = function(){
			console.log(cola[cola.length - 1]);
		}
		document.querySelector('button[buscarCola]').onclick = function(){
			var entradaCola = document.querySelector('input[entradaCola]');
			buscarElemento(entradaCola.value,cola);
		}
	
		//pila
		document.querySelector('button[agregarPila]').onclick = function(){
			agregarPila();
		}
		document.querySelector('button[sacarPila]').onclick = function(){
			sacarPila();
		}
		document.querySelector('button[mostrarProximo]').onclick = function(){
			console.log(pila[pila.length - 1]);
		}
		document.querySelector('button[buscarPila]').onclick = function(){
			var entradaPila = document.querySelector('input[entradaPila]');
			buscarElemento(entradaPila.value,pila);
		}
}


function agregarPila(){
	var entradaPila = document.querySelector('input[entradaPila]');
	var displayPila = document.getElementById('displayPila');
	if(entradaPila.value.trim() !== ''){

		var nuevoElemento = crearElemento(entradaPila.value);
		displayPila.appendChild(nuevoElemento);

		pila.push(nuevoElemento);
	}else{
		alert('llene campo para poder agregar un elemento');
	}
	entradaPila.value = '';
}

function agregarCola(){	
	var displayCola = document.querySelector('span[cont-cola]');
	var entrada = document.querySelector('input[entradaCola]');
	if(entrada.value.trim() !== ''){

		var elementoCola = crearElemento(entrada.value);
		displayCola.appendChild(elementoCola);

		cola.push(elementoCola);
	}else{
		alert('llene campo para poder agregar un elemento');
	}
	entrada.value = '';
}
function sacarCola(){
	var displayCola = document.querySelector('span[cont-cola]');
	var elementoSaliente = cola.shift();
	displayCola.removeChild(elementoSaliente);
}
function sacarPila(){
	var displayPila = document.getElementById('displayPila');
	var elementoSaliente = pila.pop();
 	displayPila.removeChild(elementoSaliente);
}
function buscarElemento(elemento,estructura){
	estructura.forEach(function(cadaUno){
		if(cadaUno.textContent == elemento){
			cadaUno.style='background:blue';
		}
	});
}
function crearElemento(valor){
	var nuevoElemento = document.createElement('div');
	nuevoElemento.setAttribute('elemento','');
	nuevoElemento.textContent = valor;
	return nuevoElemento;
}

