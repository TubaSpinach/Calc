let numKeys = document.querySelector(".numbers");
let opsKeys = document.querySelector(".operations");
let buttArray = []
let opsArray = []

/*create num buttons*/
for(let i=0; i<12; i++){
    buttArray.push(document.createElement('button'));
    buttArray[i].textContent = String(i+1);
    
    if(i==9 || i==11){
        buttArray[i].textContent = "";
    } else if(i==10){
        buttArray[i].textContent = "0";
    }

    if(i<=8 || i==10){
        buttArray[i].addEventListener('click', () => {
            add_to_output(buttArray[i].textContent);
        }
        );
    }
    
    
    numKeys.appendChild(buttArray[i]);
};

/*create operation buttons*/
let operationSymbols = {plus: "+",minus: "-",multiply:"*",divide:"/"};
for(op in operationSymbols){
    let currentButt = document.createElement('button');
    opsArray.push(currentButt);

    currentButt.textContent = operationSymbols[op];
    currentButt.addEventListener('click',() => {
        op_to_output(operationSymbols[op]);
    }
    );

    opsKeys.appendChild(currentButt);
    
};

