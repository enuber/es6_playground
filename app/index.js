// function createBookShop(inventory) {
//     return {
//         inventory: inventory,
//         inventoryValue: function() {
//             return this.inventory.reduce((total, book)=> total + book.price, 0 );
//         },
//         priceForTitle: function(title) {
//             return this.inventory.find(book => book.title === title).price;
//         }
//     }
// }
//
// const inventory = [
//     { title: 'Harry Potter', price: 10 },
//     { ttile: "Eloquent JS", price: 15 }
// ];
//
// const bookShop = createBookShop(inventory);
//
// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle('Harry Potter'));


//rewritten with Obj Literals
//if key and value are exact same name, we can just say it one time. (ie inventory :inventory is just inventory
//if you have a key value pair this is a function, you can omit the function keyword and the :
function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book)=> total + book.price, 0 );
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { ttile: "Eloquent JS", price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));


//another set
// function saveFile(url, data) {
//     $.ajax({
//         method: 'POST',
//         url: url,
//         data: data
//     });
// }
//
// const url = "http://fileupload.com";
// const data = { color: red };
//
// saveFile(url, data);

//again if key and value are same you can just call it one time
//it is standard to move single key value pairs to the left/top of list
function saveFile(url, data) {
    $.ajax({
        url,
        data,
        method: 'POST',
    });
}

const url = "http://fileupload.com";
const data = { color: red };

saveFile(url, data);