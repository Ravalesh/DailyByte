const validPalindrome = (input) =>{
    var arr = input.replace(/\W+/g, "").toLowerCase().split('');
    var left = 0;
    var right = arr.length-1;
    var phalindrome = true;
    while(left<right){
        if(arr[left] !== arr[right]){
            phalindrome = false;
            break;
        }
        left++;
        right--;
    }
    return phalindrome;
}
var input = `A man, a plan, a canal: Panama......`;
var isPalindrome = validPalindrome(input);
console.log(`String '${input}' is Palindrome?: ${isPalindrome}`);