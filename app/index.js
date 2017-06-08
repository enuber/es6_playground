//fat arrows

const add = function(a, b) {
    return a+b;
};

add(1, 2);

//remove function key word add fat arrow after params
const addFat = (a, b) => {
    return a+b;
};

addFat(1, 2);


//if single expression, you can remove the brackets and the return and, it will implicitly return
const addFat1 = (a, b) => a+b;

addFat1(1, 2);


const double = function(number) {
    return 2 * number;
};

double(8);

//with a single argument coming in, you can also omit the () around it. like the following
// const double1 = number => return 2 * number;
//
// double1(8);got a

const numbers = [1,2,3];

//using map this is how learned initially
numbers.map(function(number) {
    return 2 * number
});
//this drops function and puts the fat arrow after argument. as only one arguement can drop ()
//since a single expression, can remove {} and return so it becomes just this
numbers.map(number => 2* number);

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(member => {
            return `${member} is on team ${this.teamName}`
        })
    }
};

console.log(team.teamSummary());