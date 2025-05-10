console.log("This is my script")
let result = {
    
    "tag": "",
    "free": true,
    "role": false,
    "user": "codewithharry",
    "email": "codewithharry@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  
   
}   
submitBtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    console.log("Clicked")
   let key="ema_live_EvhdJMMMYXCCnVyP1egIsz4LeWPlSb4tDdsFqFZd" 
   
   let email = document.getElementById("username").value
    return
    
let url = `https://app.emailvalidation.io//v1/info?apikey=apikey=${key}&email=${email}`
let res = await fetch(url)
let result = await res.json()

let resultCont = document.getElementById("resultCont");

let str = ``
for (key of Object.keys(result)){
    str = str + `<div>${key}: ${result[key]}</div>`
}
console.log(str)
resultCont.innerHTML = str;
})

