let numbers = [];
let number;

while (true) {
    number = parseInt(prompt("Enter a number (or a previously entered number to stop):"));
    if (numbers.includes(number)) {
        console.log("The number " + number + " has already been given.");
        break;
    } else {
        numbers.push(number);
    }
}
numbers.sort((a, b) => a - b);
console.log("Numbers in ascending order:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}