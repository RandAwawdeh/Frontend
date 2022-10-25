function calc(){
    let firstNum = document.getElementById("firstNum")
    let secNum = document.getElementById("secNum")
    let result = document.getElementById("result")
    let opeSum = document.getElementById("sum")
    let opeMin = document.getElementById("min")
    let opeMult = document.getElementById("mult")
    let opeDiv = document.getElementById("div")


    if(opeSum.checked){
        result.innerHTML = parseInt(firstNum.value) + parseInt(secNum.value)
    }
    if(opeMin.checked){
        result.innerHTML = parseInt(firstNum.value) - parseInt(secNum.value)
    }
    if(opeMult.checked){
        result.innerHTML = parseInt(firstNum.value) * parseInt(secNum.value)
    }
    if(opeDiv.checked){
        result.innerHTML = parseInt(firstNum.value) / parseInt(secNum.value)
    }
}