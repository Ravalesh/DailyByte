const reverse = (input) =>{
    var arr = input.split('');
    var reversedString = "";
    for (let index = arr.length - 1; index >= 0; index--) { 
        const element = arr[index];
        reversedString += element;
    }
    console.log("Reversed Array is " + reversedString);

}

reverse("My Name is Ravalesh");