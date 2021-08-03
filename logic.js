
let message=""
let msgel= document.getElementById("msg")
let cardprint = document.getElementById("card")
let sumprint = document.getElementById("sum")
let cards = [2,3,4,5,6,7,8,9,10]
let sum = 0;
let card = 0
let c=[]

function cardstart(){
    cardprint.textContent = "Card: "

    for( let i=0; i<c.length;i++){
        cardprint.textContent +=  c[i] + " " 
    }

    sumprint.textContent = "Sum: " + sum
    if(sum<=20){
        message = "Another card? You are close to winning"
    }
    else if(sum===21){
        message = "YeY!! You WON!!!🥳"
    }
    else{
        message = "Errr!! GAME OVER!! Restart to play again"
    }

    msgel.textContent = message
}

function newcard(){
    card = cards[Math.floor(Math.random() * 9)];
    c.push(card)
    sum += card
    cardstart()
}

function start(){
    card=0
    sum=0
    cardprint.textContent = "Card: " + card
    sumprint.textContent = "Sum: " + sum
    
}