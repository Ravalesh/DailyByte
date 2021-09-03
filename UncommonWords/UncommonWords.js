/*
 Given two strings representing sentences, return the words that are not common to both strings 
 (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a 
 sequence of words (without punctuation) correctly separated using space characters.
*/
const uncommonWords = (sentence1, sentence2) =>{
    var arrSentence1 = sentence1.split(" ");
    var arrSentence2 = sentence2.split(" ");
    var runningCount = new Map();

    arrSentence1.forEach(element => {
        if(element.trim() !== ""){
            if(runningCount.has(element)){
                runningCount.set(element, runningCount.get(element)+1);
            }else{
                runningCount.set(element, 1);
            }
        }
    });

    arrSentence2.forEach(element => {
        if(element.trim() !== ""){
            if(runningCount.has(element)){
                runningCount.set(element, runningCount.get(element)+1);
            }else{
                runningCount.set(element, 1);
            }
        }
    });

    var uncommonWordsArray = new Array();

    runningCount.forEach((value, key, map) => {
        if(value === 1){
        uncommonWordsArray.push(key);
        }
    });
    return uncommonWordsArray;
}

const sentence1 = "copper coffee pot";
const sentence2 = "hot coffee pot";
const uncommonWordsArray = uncommonWords(sentence1, sentence2);
console.log(`Uncommon words in '${sentence1}' and '${sentence2}': [${uncommonWordsArray}].`);