
const input = [';D', ':-(', ':-)', ';~)']; //Example input
const result = countSmileys(input);

console.log(`Total number of smiling faces : ${result}`);

function countSmileys(input) {
    if (input.length === 0) {
        return 0;
    }
    let countSmile = 0;
    for (face of input) {
        if (isValidSmiley(face)) {
            countSmile++;
        }
    }
    return countSmile;
}

function isValidSmiley(face) {
    // Smiley face must be of length 2 or 3
    if (face.length < 2 || face.length > 3) {
        return false;
    }
    // Check eyes
    if (face[0] !== ':' && face[0] !== ';') {
        return false;
    }
    // Check nose (if have)
    if (face.length === 3 && (face[1] !== '-' && face[1] !== '~')) {
        return false;
    }
    // Check mouth
    const mouth = face[face.length - 1];
    return (mouth === ')' || mouth === 'D');
}