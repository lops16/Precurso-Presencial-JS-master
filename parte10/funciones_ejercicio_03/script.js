
function divi(numA, numB){
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
}


/* let numero1 = parseInt(prompt("elige el primer numero"))
let numero2 = parseInt(prompt("elige el segundo numero"))

divi(numero1, numero2) */