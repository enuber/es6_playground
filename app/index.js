//Generator
// a generator can be entered and exited multiple times. We can return a value and then go right back into it
//and keep going from the same location that we left.

const colors = ['red', 'green', 'blue'];

//for/of loop
for (let color of colors) {
    console.log(color);
}

//the *  makes this a generator
function* shopping() {
    //stuff on the sidewalk

    // walking down the sidewalk

    //go into the store with cash, //this is where we also reenter the generator
    //with 'groceries' yield is a keyword that exits function and then when
    //going back into the function we return to this place.
    const stuffFromStore = yield 'cash';
    //walking to laundrymat
    const cleanClothes = yield 'laundry';
    // walking back home
    return [stuffFromStore, cleanClothes];
}

//stuff in the store
//this doesn't actually go through the function
const gen = shopping();
//gives {'done': false} leaving our house, this is where we actually go into
//the function.
gen.next();
//walked into the store at this point
//walking through the store up and down the aisles
//purchased our stuff
// gives {'done': true} leaving the store with groceries
gen.next('groceries');
gen.next('clean clothes');


function* colors() {
    yield 'red';
    yield 'green';
    yield 'blue';
}

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}

myColors;


const engineeringTeam = {
    size: 3,
    dept: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
}

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

names;

//refractored
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    //the Symbol.iterator gets used if it exists to use the generator it is
    //pointing at to iterate over the object. the Symbol.iterator just teaches
    //the for/of loop how to iterate over the object. Note the use of this as
    //we are referring to the object that this generator is within.
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    size: 3,
    dept: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    //could just be testingTeam by itself since it's key value is same
    testingTeam: testingTeam,
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        //this yield causes the for/of loop to iterate over the team.testingTeam
        yield* this.testingTeam;
    }
}

const names = [];
for (let name of engineeringTeam) {
    names.push(name);
}
names;


//tree

class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }
    *[Symbol.iterator]() {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh',[])
];

const tree = new Comment('Great post!', children);

const values = [];

for (let value of tree) {
    values.push(value);
}

values;