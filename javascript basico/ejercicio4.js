function sumar(numero1,numero2){
	if(!isNaN(numero1)){
		console.log(numero1+' no es un numero');
	}else if(!isNaN(numero2)){
		console.log(numero2+' no es un numero');
	}else{
		console.log(numero1 + numero2);
	}
}