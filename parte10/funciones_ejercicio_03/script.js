
/* function divi(numA, numB){
    if (numB >= 1) {
        let resultado = numA/numB
        alert(resultado);
    }
}
while (true) {
    let numero1 = parseInt(prompt("elige el primer numero"));
    let numero2 = parseInt(prompt("elige el segundo numero"));

    if (numero2 >=1) divi(numero1, numero2)
        
    else {
        alert("El numero final es 0")
        break;
        
    }
} */


/* let numero1 = parseInt(prompt("elige el primer numero"))
let numero2 = parseInt(prompt("elige el segundo numero"))

divi(numero1, numero2) */

//solucion clase



function divi(numOne, numTwo) {
    if (numTwo !== 0) {
        alert(numOne/numTwo)
        
    }
}

let firstNumber = ""
let secondNumber = ""

do{
    firstNumber = parseInt("Dame un numero")
    secondNumber = parseInt("dame otro numero")

    divi (firstNumber, secondNumber)

}while (secondNumber !== 0) {
    
}