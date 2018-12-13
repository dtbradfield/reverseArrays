//Create a new function to reverse the array
let reverseArray = array => {
    //create an empty array to store reverse of input array
    let output = [];
    //loop through the array, begin 1 from end of array, pushing everything to new array
    for ( let i = array.length - 1; i >=0; i-- ) {
        output.push(array[i]);
    };
    //return new, reversed array
    return output;
};

//Create a function to reverse the array in-line
let reverseArrayInPlace = array => {
    //loop thru array, round down and divide length by 2 to swap corresponding spots (middle may stay same if odd length array)
    for ( let i = 0; i < Math.floor(array.length / 2); i++ ) {
        let mirror = array.length - 1 - i;
        let old = array[i];
        array[i] = array[mirror];
        array[mirror] = old //the good ol' swap-a-roo
    };
    //return the array
    return array;
};





//The following is taken from EloquentJS ebook:
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]