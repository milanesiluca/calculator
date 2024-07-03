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
    console.log("1 - Addiction");
    console.log("2 - Substraction");
    console.log("3 - Multiplication");
    console.log("4 - Division");

    const choice = prompt("insert your choice: ");
    if (isNumber(choice) == false || (choice < 1 || choice > 4) ){
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

    if (choice === 1){
        add(a, b);
    } else if (choice === 2){
        substruction(a, b);
    } else if (choice === 3){
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