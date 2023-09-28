
function divi(numA, numB){
    
    while (true) {
        if (numB >= 1) {
            let resultado = numA/numB
            alert(resultado);
            break;
        }

        if (numB == 0) {
            break;
        }
        
    }
    
}

let numero1 = parseInt(prompt("elige el primer numero"))
let numero2 = parseInt(prompt("elige el segundo numero"))

divi(numero1, numero2)