// A pangram is a sentence that contains every letter of the alphabet, like: " The quick brown fox jumps over the lazy dog".
// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing.
// isPangram('The five boxing wizards jump quickly'); // true
// isPangram('The five boxing wizards jump quick'); // false

function isPangram(sentence) {
    // create an array to hold alphabet
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(sentence.toLowerCase().indexOf(char) === -1) {
        return false;
        }
  
    }
return true;
}

// you could use includes() but this is not yet supported in IE

// function isPangram(sentence) {
//     // create an array to hold alphabet
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if(!sentence.toLowerCase().includes(char)) {
//         return false;
//         }
  
//     }
// return true;
// }