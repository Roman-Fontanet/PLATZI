// CUADRADO
console.group("CUADRADO");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4
};
perimetroCuadrado()
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado
};
areaCuadrado()
// console.log("El area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();


// TRIANGULO
console.group("TRIANGULOS");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del tiangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo= 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
    
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura){
    return (base * altura) / 2; 
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// CIRCULO
console.group("CIRCULOS");
// const radio = 4;
// console.log("El radio del circulo es: " + radio + "cm");

function diametroCirculo(radio){
    return radio * 2
}
// const diametroCirculo = radio * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es: " + PI)

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}
// const perimetroCirculo = diametroCirculo * PI
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm")

function areaCirculo(radio){
    return (radio * radio) *PI
}
// const areaCirculo = (radio * radio) *PI;
// console.log("El area del circulo es: " + areaCirculo + "cm2")

console.groupEnd();



function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es: " + area);
}





function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);
}




function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}