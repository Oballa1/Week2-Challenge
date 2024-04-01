
//This is to declare the function that will change the strings to uppercase.
function toUpperCase(text) {
    return text.toUpperCase();
}
//This is to declare the function that will change the strings to lowercase.
function toLowerCase(text) {
    return text.toLowerCase();
}
// Function to invert the case of a string
function invertCase(text) {
    // Split the string into an array of characters, apply the case conversion function to each character
    return text.split('').map(text => {
        // Check if the character is uppercase and call the appropriate function
        if (text === text.toUpperCase()) {
            return toLowerCase(text);
        } else {
            return toUpperCase(text);
        }
        //use the  .join to return the different characters into a single string
    }).join('');
}
console.log(invertCase("GoodMorning"));
