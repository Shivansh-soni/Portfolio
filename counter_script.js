let count = 0
let savecount = document.getElementById("save-el")
let c = document.getElementById("count-el")
function increment(){
    console.log("clicked")
    count = count + 1
    c.textContent = count  
}
function save(){
    savecount.textContent += count + " - " 
    console.log(savecount)
    count = 0
    c.textContent = 0
}

