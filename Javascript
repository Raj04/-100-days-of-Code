//Default parameters for function
function abc(number,value=1){
    return number+value;
}

console.log(abc(5,6));
console.log(abc(4));



//Object.freeze()
var obj={
    name:"raj",
    age:21,
    array:[1,2,3],
}
// obj.array[0]=5;/*object modified*/
// console.log(obj.array);
Object.freeze(obj);
obj.array[1]=5;
console.log(obj)
