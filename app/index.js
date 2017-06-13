//promises

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);

});

promise
    .then(() => {
    console.log('finally finished');
    })
    .then(()=>{
    console.log('I was also ran!')
    })
    .catch(() => {
    console.log('uh oh...rejected');
    });

//fetch

const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    //if fails, catch does not actually happen. unless the request flat out fails to happen
    .catch(error => console.log('Bad', error));