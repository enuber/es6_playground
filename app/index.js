
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

//Create a variable to hold the sum

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

var filteredProducts = [];

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

/** find **/

var users = [
    { name: 'jill'},
    { name: 'alex' },
    { name: 'bill' }
];

var user;

for (var i=0; i < users.length; i++) {
    if (users[i].name === 'alex'){
        user = users[i];
        break;
    }
}

console.log(user);

var userFound = users.find(function(user) {  //will return only the first time it is found
    return user.name === "alex";
});

console.log(userFound);

function Car(model){
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

var carFound = cars.find(function(car) {
    return car.model === 'Focus';
});
console.log(carFound);

var posts = [
    { id: 1, title: "new post"},
    { id: 2, title: 'old post'}
];

var comment = { postId: 1, content: 'Great Post'};

function postForComment(posts, comment) {
    return posts.find(function(post){
        return post.id === comment.postId;
    })
}

console.log(postForComment(posts, comment));

//every and some
//with every we can view it as an && operator between each item in an array and
//with some we can view it as an || operator between each item


var computers = [
    { name: 'Apple', ram: 24},
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

var allComputerCanRunProgram = true;

var onlySomeCanRunProgram = false;

for (var i=0; i<computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        allComputerCanRunProgram = false;
    } else {
        onlySomeCanRunProgram = true;
    }
}

console.log('all: ', allComputerCanRunProgram);
console.log('some: ', onlySomeCanRunProgram);

var arrEvery = computers.every(function(computer) {
    return computer.ram > 16;
});

var arrSome = computers.some(function(computer) {
    return computer.ram > 16;
});

console.log('every: ', arrEvery);
console.log('some: ', arrSome);

var names = [
    'Alexandria',
    'Matthew',
    'Joe'
];

var namesEvery = names.every(function(name){
    return name.length > 4;
});

var namesSome = names.some(function(name){
    return name.length > 4;
});

console.log('every: ', namesEvery);
console.log('some: ', namesSome);

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field('2cool');
var password = new Field('my_password');
var birthdate = new Field('10/10/2010');


var isValid = username.validate() && password.validate() && birthdate.validate();

console.log('validate: ', isValid);

var fields = [username, password, birthdate];

//this keeps it cleaner and more simple than declaring the variable above isValid and doing && statements for everything
var formIsValid = fields.every(function(field) {
    return field.validate();
});

if (formIsValid) {
    //allow user to submit!
} else {
    //show an error msg
}

//Reduce

var numbersArr = [10, 20, 30];

var sumArr = 0;

for (var i = 0; i < numbersArr.length; i++) {
    sumArr += numbersArr[i];
}
console.log(sumArr);


// here 0 is being passed in as the initial value, so 0 could be any starting value you want. It is coming into the
//function as what "sum" is here. number is the individual number in each step through the numbersArr
var reduceArr = numbersArr.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log('reduced array: ', reduceArr);

var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

var justColors = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log('colors: ', justColors);


//without the ! we would just get a count of numbers by adding in the ! we are saying we want a boolean and
//0 = true every other number else is = false so this will work for our case. the final return statement here
// will still returnthe counter if anything other than a parenthesis is found
function balancedParens(string) {
    return !string.split('').reduce(function(counter, char) {
        if (counter < 0) {return counter}  //this catches the case of )( where they still balance but not properly
        if (char === '(') { return ++counter} //adds a 1 if open
        if (char === ')') { return --counter} //decreases by 1 if closing
        return counter; //if anything else is encountered we return the counter and ignore it
    }, 0);
}

balancedParens('((((');