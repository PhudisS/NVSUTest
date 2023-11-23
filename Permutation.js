const input = process.argv[2];

if (!input) {
    console.log("Must contain non-empty input string!");
} else {
    const result = Permutations(input);

    const displayResult = JSON.stringify(result);

    console.log(displayResult);
}

function Permutations(input) {
    const permutations = [];
    PermutationsAction([...input], 0, permutations);
    return permutations;
}

function PermutationsAction(array, index, permutations) {
    if (index === array.length - 1) {
        const permutation = array.join('');
        if (!permutations.includes(permutation)) {
            permutations.push(permutation);
        }
    } else {
        for (let i = index; i < array.length; i++) {
            if (shouldSwap(array, index, i)) {
                [array[index], array[i]] = [array[i], array[index]]; // shuffle
                PermutationsAction(array, index + 1, permutations);
                [array[index], array[i]] = [array[i], array[index]]; // Backtrack to restore the original order
            }
        }
    }
}

function shouldSwap(array, start, end) {
    for (i = start; i < end; i++) {
        if (array[i] === array[end]) {
            return false;
        }
    }
    return true;
}
