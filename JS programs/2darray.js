function multiplyAll(arr) 
{  
    var product = 1;  // Only change code below this line\n  
    for(var index=0;index<arr.length;index++){    
        for(var index1=0;index1<arr[index].length;index1++){
            product*=arr[index][index1];
        }
    }
    // Only change code above this line\n  \n}\n\n// Modify values below to test your code;\n"}
    return product;
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
