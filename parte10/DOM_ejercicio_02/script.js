button = document.querySelector("#btn")

button.addEventListener("click", function(){
    changetext()
})

function changetext(){
    document.querySelector("#text").innerHTML = "La variable está en true"
}