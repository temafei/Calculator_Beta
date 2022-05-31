let cnopki1 = document.querySelector('.cnopki1')
let Result = document.querySelector('#Result')
 

cnopki1.addEventListener('click', function(event){
    let value = event.target.innerText
    
    let space = " "
    
    let statusOperator
    let nowLastItemIndex

    nowLastItemIndex = display.value.length - 1
    statusOperator = checkLastItem(nowLastItemIndex)


    console.log(event.target.closest("button"))
    
    if (event.target.closest("button") != null) {
    
        if (statusOperator) {
            let nowStr = display.value 
            nowStr = nowStr.split("")
            nowStr[nowLastItemIndex] = "*"
            display.value = nowStr.join("")
        } else {
            display.value += "*"
        }

        Result.addEventListener("mouseover", function () {
            Result.style.color = "red"
            Result.style.background = "pink"
        
        })
        Result.addEventListener("mouseout", function () {
            Result.style.color = "black"
            Result.style.background = "rgb(239, 239, 239)"
        })
        
    
    switch(value){
    case 'AC':
        Result.innerText = ''
    break
    case '=':
        Result.innerText = eval(Result.innerText).toFixed(2)
    break
    case '+/-':
        Result.innerText = '-'
    break
    case ',' :
         Result.innerText = '.'
    break

    default:
    Result.innerText += value;
  }
}
})

