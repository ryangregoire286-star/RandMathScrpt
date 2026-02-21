import printOperator from "./Messages";
import DateNow from "./DateNow";

function main() {

    console.log(DateNow());

    let names = ["+", "-", "*", "/"];
    let operator_rand = Math.floor(Math.random() * names.length);

    let op = names[operator_rand];

    let num1 = Math.floor(Math.random() * 5);
    let num2 = Math.floor(Math.random() * 10);

    switch(op) {

        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;

        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;

        case "*":
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;

        case "/":

            console.log(`${num1} / ${num2} = ${parseFloat(String(num1 / num2)).toFixed(2)}`);
            break;
    }

    printOperator(op);

}

main();