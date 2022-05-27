let cnopki1 = document.querySelector('.cnopki1')
let Result = document.querySelector('#Result')
 

cnopki1.addEventListener('click', function(event){
    let value = event.target.innerText
    
    let space = " "
    
    let statusOperator
    let nowLustitemIndex
    console.log(event.target.closest("button"))
    
    if (event.target.closest("button") != null) {
    
    
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

