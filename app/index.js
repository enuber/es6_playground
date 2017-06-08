//Template Strings

function getMessage() {
    const year = new Date().getFullYear();
    return "The year is " + year;
}

console.log(getMessage());


// difference is we use back ticks and then whereever we want a variable to appear we put it inside of the
// ${variableNameHere}. This allows us to not have to use normal concatenation.
// inside the ${} you don't just have to have a variable, you can do any JS expression so you can do math for
//instance
function getMessage() {
    const year = new Date().getFullYear();
    return `The year is ${year}`;
}

console.log(getMessage());

//PHP
// $data = '{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'","}';

data = '{"device_id":"' + device_id +'", "guid":"' + guid +'", "username":"' + username +'","}';

data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}", "} `;


//don't do the following
const year = 2016;
const yearMsg = `${year}`;
yearMsg;

//should just be
const year = 2016;
const yearMsg = year;
yearMsg;