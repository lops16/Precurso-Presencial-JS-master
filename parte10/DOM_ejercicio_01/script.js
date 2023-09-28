let number = parseInt(prompt("Itroduce un numero"))

document.querySelector("#num").innerHTML = number;

button = document.querySelector("#btn");

button.addEventListener("click", function(){
    addnumber(number);
})

function addnumber(num){
    p = document.querySelector("#num");
    p.innerHTML = parseInt(p.innerHTML) + num;

}