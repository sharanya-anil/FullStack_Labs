function performOperation(op) {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var result;

    switch(op) {
        case 'Add':
            result = num1 + num2;
            break;
        case 'Subtract':
            result = num1 - num2;
            break;
        case 'Multiply':
            result = num1 * num2;
            break;
        case 'Divide':
            result = num1 / num2;
            break;
        default:
            alert("Choose a valid option");
            return;
    }
    document.getElementById("rs").value = result;
}