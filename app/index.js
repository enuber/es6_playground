
/** forEach **/
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(function(color) {
    console.log(color);
});

//Create an array of numbers

var numbers = [1,2,3,4,5];

//Create a variabl to hold the sum

var sum = 0;

//Loop over the array, incrementing the sum variable

numbers.forEach(function(number) {
    sum += number;
});

//print the sum variable

console.log(sum);

// can also write it like this

function adder(number) {
    sum += number;
}

numbers.forEach(adder);

console.log(sum); //note will be double now because didn't reset the sum


/** map helper **/

var mapNumbers = [1,2,3];
var doubledNumbers = [];

for (var i=0; i< mapNumbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

var doubled = mapNumbers.map(function(number) {
    return number * 3;
});

console.log(doubledNumbers, doubled);


var cars = [
    {model: "Buick", price: 'cheap'},
    {model: "Camaro", price: 'expensive'}
];

var prices = cars.map(function(car) {
    return car.price;
});

console.log(prices);