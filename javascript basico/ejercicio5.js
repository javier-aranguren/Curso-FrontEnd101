//declaracion
var vocales = new Array("a","e","i","o","u");
var numeros = [1,2,3,4,5,6,7,8,9,0];

//acceso a espacios
console.log(vocales[0]); //a
 
//asignacion
vocales[0] = "cambio el valor";
console.log(vocales); 

/*
pilas
	push()
	pop()
*/
vocales.push('ultimo');
console.log(vocales);
vocales.pop();
console.log(vocales);

/*
cola
  push()
  shift()
*/

vocales.push('ultimo');
console.log(vocales);
vocales.shift();
console.log(vocales);

for(var x=0;x<vocales.length;x++){
	console.log(vocales[x]);
}

vocales.forEach(function(vocal){
	console.log(vocal);
});

numeros.forEach(function(variable){
	variable++;
	console.log(variable)
});

var todos = vocales.concat(numeros);

console.log(todos);


numeros.forEach(function(invertido){

	console.log(invertido);
});