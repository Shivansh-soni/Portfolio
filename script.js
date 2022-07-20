getMail=document.getElementById("mail")
mail=[]

function save(){
    mail.push(getMail.value)
    console.log(mail)
    localStorage.setItem("mail-list",mail)
    getMail.value=""
}

const togglebutton = document.getElementsById("toggle-button")