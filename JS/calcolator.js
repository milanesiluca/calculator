const add = (a,b) => a + b;
const substruction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function isNumber(value) {
    return typeof value === 'number';
}

console.log("write 'calculator' to start the calculator");

function calculator(){

    console.log("Available operation:");
    console.log("'+' - Addiction");
    console.log("'-' - Substraction");
    console.log("'*' - Multiplication");
    console.log("'/' - Division");

    

    const choice = prompt("Insert your choice");
    if (!['+', '-', '*', '/'].includes(choice) ){
        console.log("Invalid choice. Please write 'calculator' to start a new operation");
        return;
    }

    const a = prompt("insert the first number: ");
    if (isNumber(a) == false){
        console.log("Invalid input. Please write 'calculator' to start a new operation");
        return;
    }

    const b = prompt("insert the second number: ");
    if (isNumber(b) == false){
        console.log("Invalid input. Please write 'calculator' to start a new operation");
        return;
    }

    if (choice === '+'){
        add(a, b);
    } else if (choice === '-'){
        substruction(a, b);
    } else if (choice === '*'){
        multiply(a, b);
    } else {
        if (a === 0)
            return 0;
        else if (b == 0){
            console.log("A number cannot be diveded for 0");
            return;
        } else
            divide(a, b);
    }

}