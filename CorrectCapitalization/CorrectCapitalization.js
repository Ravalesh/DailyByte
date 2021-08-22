/*
 A string correctly uses capitalization if all letters are capitalized, 
 no letters are capitalized, 
 or only the first letter is capitalized.
*/
const correctCapitalization = (input) =>{
    var regexp1 = /^([A-Z])([a-z])+$/;
    var regexp2 = /^([A-Z])+$/;
    var regexp3 = /^([a-z])+$/;

    if(regexp1.test(input) || regexp2.test(input) || regexp3.test(input)){
        return true;
    }else{
        return false;
    }
}

var inputString = `coding`;

var isCorrectCapitalization = correctCapitalization(inputString);

console.log(`Test for Correct Capitalization: ${isCorrectCapitalization}`);