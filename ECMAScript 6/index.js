// ANTES DE ES6
function newFunction (name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country ||'AR';
    console.log(name, age, country);
}

// con EC6
function newfunction2(name= 'oscar', age= 32, country = 'AR'){
    console.log(name, age, country);
};

//HAY 2 FORMAS DE LLAMR FUNCIONES
//LA PRIMERA TOMA LOS ATRIBUTOS POR SI MISMOS, SE PUEDE DEJAR VACIA

newfunction2();
newFunction('RICARDO','23', 'CO');

//CONCATENAR ANTES DE ES6
let hello = "Hello"
let world = "world"
let epicPharase = hello + ' ' + world;
console.log(epicPharase);

// con los templates se hace mas facil concatenar con las ``
let epicPharase2 = `${hello} ${world}`;
console.log(epicPharase2);