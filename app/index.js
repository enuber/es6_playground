//destructuring

var expense = {
    type: 'Business',
    amount: '$45 USB'
}
//
// var type = expense.type;
// var amount = expense.amount;

//es6
//when curly braces used on left side, it is saying you want to declare a new variable called whatever is inside the
//brace and it should reference the right hand expression.

//here we are saying we want to declare a variable called type and assign it to expense.type.
// const { type } = expense;
// const { amount } = expense;

//can simplify even more, we can pull off more than one variable within an object with a comma separated list
const { type, amount } = expense;


var savedFile = {
    extension: '.jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file) {
    return `The file ${file.name}${file.extension} is of size ${file.size}`
}

console.log(fileSummary(savedFile));

//destructure

function fileSummary1({ name, extension, size}) {
    return `The file ${name}${extension} is of size ${size}`
}

console.log(fileSummary1(savedFile));

//arrays

//when desstructing arrays, you get them in the order they are in the original array
const companies = ['google', 'facebook', 'Uber'];
//
// const [ name, name1, name2 ] = companies;
// console.log(name, name1, name2);


const companies2 = [
    {name: 'google', location: 'Mountain View'},
    {name: 'facebook', location: 'Menlo Park'},
    {name: 'Uber', location: 'San Francisco'}
];

//goes outside in. so first we grab the first index of the array which is the full obj. then, with the {} we
//are destructuring further and getting the name and location.
const [{name, location}] = companies2;
console.log(name, location);


const Google = {
    locations: ['Mountain View', 'New York', 'London']
};
//more chanllenging...we are first destructing obj. and getting locations. However, this is an array so we need
//to walk into the array and pull off the first item of that array
// const {locations : [ location ]} = Google;
// console.log(location);

const points = [
    [4,5],
    [10, 1],
    [0, 40]
];

const list = points.map(([x, y]) => {
    return { x: x, y: y};
});

console.log(list);