let num1 = parseFloat(prompt('Enter first number'));
let num2 = parseFloat(prompt('Enter first number'));
if (num1 > num2) {
    document.write(`${num1} is the higher number.`);
} else if (num1 === num2) {
    document.write(`${num1} & ${num2} are equal`);
} else {
    document.write(`${num2} is the higher number.`);
}