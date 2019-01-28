
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));

/*ParseInt function*/

function stringToInteger(str){
    
    return parseInt(str);
}
console.log(stringToInteger("5"));

/*parseInt function with radix as the second argument*/
function convertToInteger(str) {
  return parseInt(str,10);/*radix is considered as the base d*/
}

console.log(convertToInteger("11"));


/*typeof operator*/
console.log(typeof "raj");
