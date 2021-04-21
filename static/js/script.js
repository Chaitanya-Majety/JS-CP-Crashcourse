


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

// challenge 2: cat generator

function generatecat(){
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.setAttribute("id","flex-cat-gen")
    div.appendChild(image)
    document.getElementById("flex-cat-gen-result").appendChild(div)
}

// challenge 3 :- Rock, Paper, Scissors

function rpsgame(mychoice){

    var humanchoice, botchoice
    humanchoice = mychoice.id
    botchoice = numbertochoice(randtorpsint())
    console.log("human_choice:",humanchoice)
    console.log("computer_choice:",botchoice)

    results = decidewinner(humanchoice,botchoice)
    //console.log("final_results:",results)

    // [1,0] , [0.5,0.5] , [0,1]

    message = finalmessage(results) // returns something like {"message":"you won","color":"green"}
    console.log(message["message"])

    rpsfrontend(humanchoice, botchoice, message)

}

function randtorpsint(){
    return Math.floor(Math.random()*3)
}

function numbertochoice(number){
    let rps = ["rock","paper","scissors"]
    return rps[number]
}

function decidewinner(human,bot){
    var rpsdatabase={
        "rock":{"scissors":1,"rock":0.5,"paper":0},
        "paper":{"scissors":0,"paper":0.5,"rock":1},
        "scissors":{"rock":0,"scissors":0.5,"paper":1}
    }
    var yourscore = rpsdatabase[human][bot]
    var computerscore = rpsdatabase[bot][human]

    return [yourscore,computerscore]
}

function finalmessage(list){
    if(list[0]== 0){
        return {"message":"computer wins","color":"red"}
    }
    else if(list[0]== 1){
        return {"message":"you win","color":"green"}
    }
    else{
        return {"message":"Its a tie","color":"yellow"}
    }
}

function rpsfrontend(humanimagechoice,botimagechoice,finalmessage){
    var imagedatabase = {
        "rock":document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    }
    //lets remove all the objects
    document.getElementById("rock").remove()
    document.getElementById("paper").remove()
    document.getElementById("scissors").remove()

    var humandiv = document.createElement("div")
    var botdiv = document.createElement("div")
    var msgdiv = document.createElement("div")

    humandiv.innerHTML = "<img src='" + imagedatabase[humanimagechoice] + "' height =150 width =150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    document.getElementById("flex-box-rps-div").append(humandiv)

    // in INNER HTML if style to be added through raw then ; is important after everthing in style
    msgdiv.innerHTML = "<h3 style='color:" + finalmessage["color"] + "; font-size:60px; padding:30px;'>" + finalmessage["message"] + "</h3>"
    document.getElementById("flex-box-rps-div").append(msgdiv)

    botdiv.innerHTML = "<img src='" + imagedatabase[botimagechoice] + "' height =150 width =150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    document.getElementById("flex-box-rps-div").append(botdiv)
}
