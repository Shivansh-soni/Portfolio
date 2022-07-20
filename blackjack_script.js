let fcard = getrandomCard()
let scard = getrandomCard()
let cards = [fcard , scard]
let isStarted=true
let isAlive = false
let hasBlackajack = false
let sum = fcard + scard
let messgeEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
 
// CARD Spawn
function getrandomCard(){
   gen = Math.floor((Math.random()*13) + 1 )
   if(gen===1){
       return 11
   }
   else if (gen > 10 && gen<14){
       return 10
   }
   else{
       return gen
   }
}

function print(){
    for (let i = 0 ; i<cards.length ; i++){
        cardsEl.textContent +=  " " + cards[i]
    }

    sumEL.textContent = "Sum : " + sum
}
function startGame(){
    if(isStarted === true){
    isAlive = true
    hasBlackajack = false
    console.log("starting") 
    renderGame()
    isStarted=false
    print()
    }
}


function renderGame(){
    if(sum < 21){
        messgeEl.textContent = "Want 1 more card ? "
    }
    else if(sum === 21){
        messgeEl.textContent = "Congrats you won jackpot"
        hasBlackajack=true
    }
    else if(sum > 21){
        isAlive = false
        messgeEl.textContent = "OOPS You are out of game , Refresh the page to Start Over"
    }
}

function newCard(){
    if (isAlive === true && hasBlackajack === false)
    {
    let ncard = getrandomCard()
    cards.push(ncard)
    sum += ncard
    cardsEl.textContent +=" "  + ncard
    sumEL.textContent = "Sum : " + sum
    renderGame()
    }
}
