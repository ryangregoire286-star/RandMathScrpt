import printOperator from "./Messages";
import DateNow from "./DateNow";
import FileReader from "./FileReader";

function main() {

    console.log(DateNow());

    let names = ["+", "-", "*", "/"];
    let operator_rand = Math.floor(Math.random() * names.length);

    let op = names[operator_rand];

    let num1 = Math.floor(Math.random() * 5);
    let num2 = Math.floor(Math.random() * 10);

    let command = null;

    switch (op) {

        case "+":
            command = `${num1} + ${num2} = ${num1 + num2}`;
            console.log(command);

            FileReader("AddNums.txt", command);

            break;

        case "-":

            command = `${num1} - ${num2} = ${num1 - num2}`;
            console.log(command);
            FileReader("SubNums.txt", command);

            break;


        case "*":

            command = `${num1} * ${num2} = ${parseFloat(String(num1 * num2)).toFixed(2)}`;
            console.log(command);
            FileReader("MulNums.txt", command);

            break;

        case "/":

            command = `${num1} / ${num2} = ${parseFloat(String(num1 / num2)).toFixed(2)}`;
            console.log(command);
            FileReader("DivNums.txt", command);

            break;
    }

    printOperator(op);
}

main();