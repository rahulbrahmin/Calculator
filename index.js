let scren = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
        // console.log(buttonText)

        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            scren.value += screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '';
            scren.value = screenValue;
        }
        else if(buttonText == '='){
            scren.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            scren.value = screenValue;
        }
    })
}
