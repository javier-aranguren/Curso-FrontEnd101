var cadena = "";
var bool = false;
var numero = 0;
var sinDefinir;
var nulo = null;

if(cadena){
	console.log('entro cadena');
}
if(bool){
	console.log('entro bool');
}
if(numero){
	console.log('entro numero');
}
cadena = 'cualquier valor'; 
bool = true;
numero = -10;

if(cadena){
	console.log('entro cadena');

}
if(bool){
	console.log('entro bool');
}
if(numero){
	console.log('entro numero');
}

//switch
switch(cadena){
	case 'guardar':
		console.log('guardando');
		break;
	case 'buscar':
		console.log('buscando');
		break;


	default:
		console.log(cadena + ' no esta soportada por este controlador');
		break;
}
