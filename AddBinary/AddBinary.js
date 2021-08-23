/*
Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
Note: neither binary string will contain leading 0s unless the string itself is 0
*/

const addBinary = (string1, string2) =>{

    var arr1 = string1.split('');
    var arr2 = string2.split('');
    var sum = 0;
    var i = 0;
    for (let index =  arr1.length - 1; index >= 0; index--) {
   
        const element = arr1[index];
     
        if(element === "1"){      
            sum += 2 ** i;
        }
        i += 1;
           
    }
    i = 0;
    for (let index =  arr2.length - 1; index >= 0; index--) {
        const element = arr2[index];
        if(element === "1"){
            sum += 2 ** i;
        }
        i += 1;
    }
    convertNumberToBinary(sum);
    return sum.toString(2);
}

var convertNumberToBinary = (number) => {
    var arr = new Array();
    var i=0;
    while(number>0){
        arr.push(number % 2)
        var number = parseInt(number/2);
    }
    console.log(`Binary representation is ${arr.reverse()}`);
}



const string1 = "11";
const string2 = "1";
var sum = addBinary(string1,string2);

console.log(`Sum of ${string1} and ${string2} is ${sum}`);
