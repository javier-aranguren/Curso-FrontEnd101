var cola = [];
var taquillas = [1,2];
load();
var registro = function(){
  var nombre = document.querySelector('input[name="nombre"]');
  var apellido = document.querySelector('input[name="apellido"]');
  var cedula = document.querySelector('input[name="cedula"]');
  if((cedula.value.trim())&&(apellido.value.trim())&&(cedula.value.trim())){
    var cliente = crearCliente(nombre.value,apellido.value,cedula.value);
    nombre.value = "";
    apellido.value = "";
    cedula.value = "";
    document.querySelector('div[cola]').appendChild(cliente);
    cola.push(cliente);
  }else{
    alert('llene todos los campos antes de continuar');
  }
};
function crearCliente(nombre,apellido,cedula){
    var cliente = document.createElement('div');
    cliente.setAttribute('tarjeta','');
    cliente.setAttribute('cliente','');
    cliente.id = cedula;
    cliente.textContent = nombre.toLowerCase()+' '+apellido.toLowerCase();
    return cliente;
}
function crearTaquilla(numero,tipo){
  var taquilla = document.createElement('div');
  taquilla.setAttribute('taquilla','');
  taquilla.setAttribute('tarjeta','');
  taquilla.id = numero;
  var inferior ="";
  if(tipo !== 'atencion'){
    inferior ="<button buton-taq-sig type='button'>SIGUEINTE</button>";
  }else{
    inferior = "<div disponible>Disponible</div>";
  }
  taquilla.innerHTML='<div titulo-taquilla>'+numero+'</div>'+inferior;
  return taquilla;
}
function load(){
  //boton del formulario
  document.querySelector('div[boton-form]').onclick= function(){
    registro();
  };
  taquillas.forEach(function(taquilla){
    document.querySelector('div[taquillas]').appendChild(crearTaquilla(taquilla,"UI"));
    document.querySelector('div[atencion]').appendChild(crearTaquilla(taquilla,"atencion"));
  });
}
