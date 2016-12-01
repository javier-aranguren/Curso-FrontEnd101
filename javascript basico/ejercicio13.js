function calculadora(perro,numero1,numero2){
	switch(perro){
		case 'sumar':
			console.log(sumar(numero1,numero2));
			break;
		case 'dividir':
			console.log(dividir(numero1,numero2));
			break;
		case 'multiplicar':
			console.log(multiplicar(numero1,numero2));
			break;
		case 'restar':
			resta(numero1,numero2);
			break;
		default:
			console.log(perro +' no disponible');
	}
}


function sumar (numero1,numero2) {
	return numero1+numero2;
}
function resta (numero1,numero2) {
	console.log(numero1-numero2);
}
function multiplicar (numero1,numero2) {
	return numero1*numero2;
}
function dividir (numero1,numero2) {
	return numero1/numero2;
}
