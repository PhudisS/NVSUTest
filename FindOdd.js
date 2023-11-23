const input = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
const result = findOdd(input);

console.log(`the odd appear is: ${result}`);

function findOdd(input) {
    for (i = 0; i < input.length; i++) {
        let count = 0;
        for (j = 0; j < input.length; j++) {
            if (input[i] === input[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return input[i];
        }
    }

    // If no odd occurrence is found.
    throw new Error("No element with odd occurrence found");
}