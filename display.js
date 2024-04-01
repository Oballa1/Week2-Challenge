// Define a function named getArray
function getArray(val1, val2) {
    // Initialize an empty array to store the numbers between val1 and val2
    let arr = [];

    // check from val1 + 1 up to val2 - 1 because it is supposed to display the numbers between the two values
    for (let i = val1 + 1; i <= val2 - 1; i++) {
        // Push each number to the array
        arr.push(i);
    }

    // Return the array containing the numbers between val1 and val2
    return arr;
}

