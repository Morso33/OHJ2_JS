let numbers = [];
let number;
while (number !== 0) {
    number = parseInt(prompt("Enter a number (0 to stop):"));
    if (number !== 0) {
        numbers.push(number);
    }
}
numbers.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}