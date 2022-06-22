const email = document.getElementById("email")
const pass = document.getElementById("pass")
const btnSubmit = document.getElementById("submit")
const btnClear = document.getElementById("clearStorage")

btnSubmit.addEventListener("click", setKeys)
btnClear.addEventListener("click", clearKeys)

var emailKey = localStorage.getItem("email")
var passKey = localStorage.getItem("password")
if(emailKey){
    email.value = emailKey
}
if(passKey){
    pass.value = passKey
}

function setKeys() {
    let tempEmail = email.value
    let tempPass = pass.value
    localStorage.setItem("email", tempEmail)
    localStorage.setItem("password", tempPass)
}

function clearKeys() {
    localStorage.clear()
}