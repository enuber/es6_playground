//Rest and Spread

function addNums(numbers) {
    return numbers.reduce((total, number) => {
        return total + number;
    },0)
}

const a = [1, 2, 3, 4, 5, 6, 7];

console.log(addNums(a));

//this says we don't know how many arguments are coming in, we want to capture them all and put them into
//an array the ... is a rest operator that allows us to do this.

function addNums1(...numbers) {
    return numbers.reduce((total, number) => {
        return total + number;
    },0)
}


console.log(addNums1(1,2,3,4,5,6,7));


const defaultColors = ['red', 'green'];
const userFavColors = ['orange', 'yellow'];

console.log(defaultColors.concat(userFavColors));

//this is the spread operator,  a new array was created with the [] brackets, we then put inside of it, a reference
//to existing arrays defaultColors and userFavColors we then added the spread operator which is the ... which means
//we want to take all of what is in the referenced array and pull them out into the new array. The same process is
//repeated with all spread operators followed by an array. It removes whatever was in the referenced array and puts it
//into the new array.
console.log([...defaultColors, ...userFavColors]);
//can also add in new elements at the same time...
console.log(['blue',...defaultColors, 'green', ...userFavColors]);


//here we are using both rest and spread. First a list of items of any size is sent in. We check to see
//if there is milk on the list, if not, we add it to the list of items and return it. Otherwise we just return the list.
function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));


const MathLibrary = {
    calcProduct (...rest) {
        console.log('please use multNums instead');
        return this.multNums(...rest)
    },
    multNums(a,b) {
        return a*b;
    }
};