/*
 Given a string representing your stones and another string representing a list of jewels, 
 return the number of stones that you have that are also jewels.
*/
const jewelsAndStones = (jewels, stones) =>{
    var myMap = new Map();
    var stonesarr = stones.split('');

    
    stonesarr.forEach(element => {
            if(myMap.has(element.charCodeAt(0))){
                myMap.set(element.charCodeAt(0), myMap.get(element.charCodeAt(0)) + 1);
            }else{
                myMap.set(element.charCodeAt(0), 1);
            }
    });
    var jewelsInStone=0;
    var jewelsarr = jewels.split('');
    jewelsarr.forEach(element => {
        if(myMap.has(element.charCodeAt(0))){
            jewelsInStone += myMap.get(element.charCodeAt(0));
        }
    });
    return jewelsInStone;
}

const jewels = "Af";
const stones = "AaaddfFf";
const numOfJewelsInStone = jewelsAndStones(jewels, stones);
console.log(` '${stones}' have ${numOfJewelsInStone} jewels.`);