var invertido = [];
var vocales = ['a','e','i','o','u','alfa','omega',1,59,35];

var y = 0;
for(var x = vocales.length -1;x >= 0;x--){
	invertido[y] = vocales[x];
	y++;
}
console.log(invertido);
