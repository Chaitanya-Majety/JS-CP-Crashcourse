


// challenge 1: your age in days


function ageindays(){
    var birthyear = prompt("when you were born")
    var ageindaays = (2021 - birthyear) * 365
    var h1 = document.createElement("h1")
    var textanswer= document.createTextNode("you are " + ageindaays + " days old")
    h1.setAttribute("id","ageindays")
    h1.appendChild(textanswer)
    document.getElementById("flex-box-result").appendChild(h1)
}

function reset(){
    document.getElementById("ageindays").remove()
}

function generatecat(){
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.setAttribute("id","flex-cat-gen")
    div.appendChild(image)
    document.getElementById("flex-cat-gen-result").appendChild(div)
}
