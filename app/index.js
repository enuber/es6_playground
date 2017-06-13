//classes

// function Car(options) {
//     this.title = options.title;
// }
// Car.prototype.drive = function() {
//     return 'vroom';
// };
//
// function Toyota(options) {
//     Car.call(this, options);
//     this.color = options.color;
// }
//
//
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
//
// Toyota.prototype.honk = function() {
//     return 'beep';
// };
//
//
// const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
//
// console.log(toyota.honk());
// console.log(toyota.drive());
// console.log(toyota.color);
// console.log(toyota.title);

//es6

class Car {
    //could do {title} instead of options and this.title = title;
    constructor(options) {
        this.title = options.title;
    }
    drive() {
        return 'vroom';
    }
}

//extends says we are grabbing a class Car and being able to use all it's methods
//super() allows us to call Car.constructor() because they have the same name. If both had honk() methods, we could
//declare super() inside the honk() method as well. We also have to pass super any info the Car.constructor()
//may need as well.
//Also to note you don't want to use destrucutring to pull off what you want, you need to have them all grouped
//together within the object.
class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
console.log(toyota.honk());
console.log(toyota.drive());
console.log(toyota.color);
console.log(toyota.title);


