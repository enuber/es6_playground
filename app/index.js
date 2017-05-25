
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


/** filter helper **/

var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'orange', type: 'fruit', quantity: 10, price: 15},
    { name: 'celery', type: 'vegetable', quantity: 30, price: 9},
    { name: 'banana', type: 'fruit', quantity: 3, price: 5}
];

var filteredProducts = []

for (var i=0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

var returnedStuff = products.filter(function(product) {
    return product.type === 'fruit';
});

console.log(filteredProducts);
console.log(returnedStuff);

//Type is vegetable quantity is greater htan 0, price is less than 10

var multiFilter = products.filter(function(product){
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

console.log(multiFilter);

var post = {id: 4, title: "New Post"};
var comments = [
    {postId: 4, content : "awesome post"},
    {postId: 3, content : "it was okay"},
    {postId: 4, content : "neat"}
];

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    });
}

console.log(commentsForPost(post, comments));

