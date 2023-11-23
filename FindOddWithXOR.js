
const input = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
const result = findOddWithXOR(input);

console.log(`the odd appear is: ${result}`);

function findOddWithXOR(input) {
    let result = 0;

    for (num of input) {
        result ^= num;
    }

    return result;
}