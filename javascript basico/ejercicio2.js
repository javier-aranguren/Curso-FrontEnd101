//manejo de condicionales

//falsos valores
var cadena = '';
var bool = false;
var numero = 0;
var falso1 = null;
var falso2 = undefined;

if(cadena){
	console.log('entro cadena');
}
if(bool){
	console.log('entro bool');
}
if(numero){
	console.log('entro numero');
}
if(falso1){
	console.log('entro falso1');
}
if(falso2){
	console.log('entro falso2');
}

//valores verdaderos
cadena = ' ';
bool = true;
numero = 100;

if(cadena){
	console.log('entro cadena 2');
}
if(bool){
	console.log('entro bool 2');
}
if(numero){
	console.log('entro numero 2');
}

//SWITCH
cadena = 'buscar';
switch(cadena){
	case 'buscar':
		console.log('buscando');
		break;
	case 'guardar':
		console.log('guardando');
		break;

	case 'eliminar':
		console.log('eliminando');
		break;
}