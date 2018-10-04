/* JavaScript code here */

console.log("External");

function sumArray(arr)
{
    var sum = 0;
    
    arr.forEach(function(value, index)
    {
        sum = sum + value;
    });
    
    return sum;
}

console.log(sumArray([1,2,3,4,5,6]));