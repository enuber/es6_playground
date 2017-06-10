//Default Funciton Paramaeters

function makeAjaxRequest(url, method) {

    if (!method) {
        method = 'Get';
    }

    //logic for request

}

makeAjaxRequest('google.com');
makeAjaxRequest('goole.com', 'GET');


//This says if user did not pass in a method argument, it is assgined 'GET' otherwise method is whatever is sent in.
//if you want it to be undefined specifically you can pass in null instead.
function makeAjaxRequest(url, method = 'GET') {

    //logic for request

}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');
makeAjaxRequest('google.com', null);


//__________________________

function User(id) {
    this.id = id;
}

function generateID() {
    return Math.random() * 999999;
}
//this makes use of default arguements, if a user isn't passed in, it generates a user to make admin. So can
//work either way as is called below;
function createAdminUser(user = new User(generateID())) {
    user.admin = true;
    return user;
}

createAdminUser();
const user = new User(generateID());
createAdminUser(user);