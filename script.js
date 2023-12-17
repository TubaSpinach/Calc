let numKeys = document.querySelector(".numbers");
let opsKeys = document.querySelector(".operations");
let buttArray = []
let opsArray = []
let output = document.querySelector(".output");
let little_output = document.querySelector(".little_output");
let currentEquation = {number1: null, number2: null, op: ""};
/*create num buttons*/
for(let i=0; i<12; i++){
    buttArray.push(document.createElement('button'));
    buttArray[i].textContent = String(i+1);
    
    if(i==9){
        buttArray[i].textContent = "C";
    } else if(i==11){
        buttArray[i].textContent = "D";
    } else if(i==10){
        buttArray[i].textContent = "0";
    }

    
    buttArray[i].addEventListener('click', () => {
        add_to_output(buttArray[i].textContent);
        }
    );
    
    numKeys.appendChild(buttArray[i]);
};

/*create operation buttons*/
let operationSymbols = {plus: "+",minus: "-",multiply:"*",divide:"/",equals:"="};
for(op in operationSymbols){
    let currentButt = document.createElement('button');
    let currentOp = operationSymbols[op]
    opsArray.push(currentButt);
    console.log(op)
    console.log(operationSymbols[op])
    currentButt.textContent = operationSymbols[op];
    currentButt.addEventListener('click',() => {
        op_to_output(currentOp);
    }
    );

    opsKeys.appendChild(currentButt);
    
};

function add_to_output(input){
    if(input === "C") {
        output.textContent = "";
        little_output.innerHTML = "";
    } else if(input === "D") {
        output.textContent = output.textContent.slice(0,-1)
    } else {
        output.textContent += input;
    }
    
}

function op_to_output(input){
    if(currentEquation.number1 === null){
        currentEquation.number1 = parseInt(output.textContent);
    } else {
        currentEquation.number2 = parseInt(output.textContent);
    };

    little_output.innerHTML += output.textContent + " " + input + "<br>";
    little_output.scrollTo({top: 1000, left: 0, behavior: "smooth"});
    output.textContent = "";

    if(input !== "="){
        currentEquation.op = input;
        
    } else {
        little_output.innerHTML += evaluate_output() + "<br>";
        little_output.scrollTo({top: 1000, left: 0, behavior: "smooth"});
        clear_current_equation();
    };  
}

function evaluate_output(){
    switch(currentEquation.op) {
        case "+":
            return currentEquation.number1 + currentEquation.number2;
        
        case "-":
            return currentEquation.number1 - currentEquation.number2;
        
        case "*":
            return currentEquation.number1*currentEquation.number2;
        
        case "/":
            return currentEquation.number1/currentEquation.number2;
    };
     
}

function clear_current_equation(){
    currentEquation.number1 = null;
    currentEquation.number2 = null;
    currentEquation.op = null;
}