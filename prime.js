// Define a function called getPrime that takes an array as an argument
function getPrime(array) {
    let result = []; // Initialize an empty array to store prime numbers

    // Loop through each value in the input array
    for (const value of array) {
        // Check if the current value meets the conditions for being prime
        if ((value % 2) > 0 && (value % 3) > 0 && value !== 1 || value === 3 || value === 2 || value === 5 || value ===7 || value ===11) {
            // If the value is prime, add it to the result array
            result.push(value);
        }
    }

    // Return the array containing prime numbers
    return result;
}

// Call the getPrime function with the example array and log the result
console.log(getPrime(array));
