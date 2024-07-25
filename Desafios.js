//Desafio 1//
ListaGenerica[""];

//Desafio 2//
LenguajesDeProgramacion["JavaScript", "C", "C++", "Kotlin", "Python"];
LenguajesDeProgramacion.push("Java", "Ruby", "GoLang")
function Listalenguajes(all){
    var all = LenguajesDeProgramacion
    console.log(all)
}

//Desafio 4//
function mostrarLenguajesSeparadamente(){
    for (let i = 0; i < LenguajesDeProgramacion.length; i++){
        console.log(LenguajesDeProgramacion[i]);
    }
}

mostrarLenguajesSeparadamente();

//Desafio 5//
function mostrarLenguajesSeparadamentein(){
    for (let i = LenguajesDeProgramacion.length - 1; i >= 0; i--){
        console.log(LenguajesDeProgramacion[i]);
    }
}

//Desafio 6//
function Calcularmedia(listaa){
    let suma = 0;
    for(let i = 0; i < listaa.length; i++){
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [10, 20, 30, 40 , 50];
let media = Calcularmedia(numeros);
console.log("Media: ", media);

//Desafio 7//
function numerosmm(listaa) {
    let mayor = Lista[0];
    let menor = lista[0];

    for(let i = 1; i < lista.length; i++) {
        if (listaa[i] > mayor) {
            mayor = lista [i];
        }
        if (listaa[i] < menor) {
            menor =  listaa
        }
    }
    console.log("Mayor: ", mayor);
    console.log("Menor: ", menor);
}

let numerosss= [15, 8, 25, 5, 12];
numerosmm(numerosss)

//Desafio 8//
function sumall(listall){
    let suma = 0; 
    for(let i = 0; i < listall.length; i++){
        suma += listall[i];
    }
    return suma;
}

let numeross = [15, 8, 25, 5, 12];
let suma = sumall(numeross);
console.log("Suma:", suma);

//Desafio 9//
function encontrarIndiceElemento(listaf, elementof){
    for (let i = 0; i < lista.length; i++) {
        return i;
    }
    return -1;
}