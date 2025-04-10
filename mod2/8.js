function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
let strings = ["Johnny", "DeeDee", "Joey", "Marky"];
let concatenatedString = concat(strings);
console.log(concatenatedString);
