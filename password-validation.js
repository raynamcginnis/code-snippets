// Password must: 
//      - be at least 8 characters
//      - cannot contain spaces
//      - connot contain the username
// if all requirements are met, return true
// otherwise, return false

// function isValidPassword(password, userName) {
//     // if password includes the username OR password contains spaces OR the passwoard length is less than 8, return false
//      if(
//         password.indexOf(userName) !== -1 ||
//         password.indexOf(' ') !== -1 ||
//         password.length < 8 )
//         {
//         return false;
//         }
//      return true;

// }

// turn everything into a variable

    // if password includes the username OR password contains spaces OR the passwoard length is less than 8, return false
    // function isValidPassword(password, userName) {
    //     const tooSimilar   = password.indexOf(userName) !== -1;
    //     const hasSpace      = password.indexOf(' ') !== -1;
    //     const tooShort      = password.length < 8 ;

    //     if (tooShort || hasSpace || tooSimilar) return false;
    //     return true; 
    //     }

// we can reverse the function

    function isValidPassword(password, userName) {
        const tooSimilar   = password.indexOf(userName) !== -1;
        const hasSpace      = password.indexOf(' ') !== -1;
        const tooShort      = password.length < 8 ;
// if the password is not too short, does not have space, and is not too similar, return true
        if (!tooShort && !hasSpace && !tooSimilar) return true;
        return false; 
        }


// we can make it even shorter

        function isValidPassword(password, userName) {
            const tooSimilar   = password.indexOf(userName) !== -1;
            const hasSpace      = password.indexOf(' ') !== -1;
            const tooShort      = password.length < 8 ;
    // return boolean - is it not too short, does it not have space, is it not too similar > Any one of these return false and it is false
        return !tooShort && !hasSpace && !tooSimilar;
        
            }