/* const personStore = {
	greet() {
		console.log(`Hello Constructor Function`);
    }
}
personStore.greet(); */

exports.sayHowdy = function sayHowdy() {
    console.log("Howdy");
}

exports.testMe = function testMe() {
    setTimeout(exports.sayHowdy, 5000);
    console.log("Test after Howdy");
}

function delayedGreet() {
    setTimeout(() => {console.log("Have a Nice day")}, 2000);
}

function helloGoodbye() {
    setTimeout(() => {
        console.log("Good bye");
        delayedGreet();
    }, 1000);
}

const userData = () => {
    return [
            { "name": "Balakarthikeyan", "company" : "Unimoni", "exp" : "7+"},
            { "name": "Ramesh", "company" : "Hexaware", "exp" : "6+"},
            { "name": "Vivek", "company" : "Adlabs", "exp" : "8+"}
        ];
};

const fetchData = new Promise(function(resolve, reject){
    setTimeout(() =>{
        let response = userData();
        if(response.length > 0){
            resolve(response);
        } else {
            reject("Error occurred");
        }
    }, 4000);
});

fetchData
.then ((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

async function fetchData () {
    try {
        const response = await userData;
        if(response.length > 0){
            console.log(response);
        } else {
            throw new Error ("My Error occurred");
        }
    } catch (err) {
        console.log(err);
    }
}

helloGoodbye();
fetchData ();