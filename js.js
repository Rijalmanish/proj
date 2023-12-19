let string = "";
let buttons = document.querySelectorAll('.button');

let x=function(e){

    if( e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    }

    else if( e.target.innerHTML == 'C'){
        string ="";
        document.querySelector('input').value = string;
    }

    else if( e.target.innerHTML == '←'){
        
        document.querySelector('input').value =string;
    }

    else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }

}

Array.from(buttons).forEach((calc)=>{
    calc.addEventListener ('click' , x)
});

