const add = (a,b) => a + b;
const substruction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function isNumber(value) {
    return typeof Number(value) === 'number';
}


    

    const choice = prompt("Insert the choosen operation (+, -, *, /)");
    if (!['+', '-', '*', '/'].includes(choice) ){
        alert("Invalid choice.");
        
    }

    let a = prompt("insert the first number: ");
    if (isNumber(a) == false){
        alert("Invalid input");
        //return;
    } else 
        a = Number(a);

    let b = prompt("insert the second number: ");
    if (isNumber(b) == false){
        alert("Invalid input");
        //return;
    } else
        b = Number(b);

    if (choice === '+'){
        alert(`result ${add(a, b)}`);;
    } else if (choice === '-'){
        alert(`result ${substruction(a, b)}`);
    } else if (choice === '*'){
        alert(`result ${multiply(a, b)}`);
    } else if (choice === '/'){
        if (b == 0){
            alert("A number cannot be diveded for 0");
            //return;
        } else
            alert(`result ${divide(a, b)}`);
    } else
        alert("operation impossible to calculate");

