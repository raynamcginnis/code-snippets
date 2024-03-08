// write a getCard() function which returns a random playing card object, like: 

// {
 //   value: 'K'
//    suit: 'clubs"'
//}
// pick a random value from: 
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// pick a random suit from
// clubs, spades, hearts, diamonds
// return both in an object

// function getCard() {
//     // create an array of values
//     let value = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     // create an array of suits
//     let suit = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
//     // pick a random number from the array
//     let myValue = value[Math.floor(Math.random()*value.length)];
//     // pick a random suit from array
//     let mySuit = suit[Math.floor(Math.random()* suit.length)];
//     //let myCard = `${myValue} of ${mySuit}`;

//     // return object with value and suit keys
//     return {
//         value: myValue, suit: mySuit
//     };
//  }

function pick(arr) {
    // return random element from arr
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

 function getCard() {
    // create an array of values
    const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    // create an array of suits
    const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
    // return object with value and suit keys
    return {
        value: pick(values), suit: pick(suits)
    };
 }