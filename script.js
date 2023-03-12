/* let arrayList = ["apple", "banana", "cherry", "dragonfruit"];
wordLength = [];

    arrayList.forEach(function(currentValue){
    wordLength.push(currentValue.length);
    biggestLength = Math.max(...wordLength);

})
console.log(biggestLength) */
 
/* In JavaScript, the Math.max() method expects a list of comma-separated arguments, not an array. 
Therefore, we use the spread operator (...) to convert the array of word lengths into a list of 
arguments that can be passed to the Math.max() method. */

//Another way to do this assuming we're creating a reusable function//

function getMaxLength(array){
let lengthArray = []; 
array.forEach(function(item){
  lengthArray.push(item.length)
})
maxLength = Math.max(...lengthArray) 
return maxLength;
console.log(maxLength);
}

arrayList = ["apple", "banana", "cherry", "dragonfruit"];
getMaxLength = getMaxLength(arrayList);
console.log(getMaxLength);