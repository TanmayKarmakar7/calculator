let display = document.querySelector('#display');
let buttons = document.querySelectorAll("button");

let result = "";

let btnArr = Array.from(buttons);

btnArr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            result = eval(result.replace("%","/100"));
            result = eval(result);
            display.value = result;
        } 
        else if(e.target.innerHTML == "AC"){
            result = "";
            display.value = result;
        }
        else if(e.target.innerHTML == "DEL"){
            result = result.toString().slice(0, -1);
            display.value = result;
        }
        else {
            result += e.target.innerHTML;
            display.value = result;
        }
    })
})