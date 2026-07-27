exports.sayHowdy = function sayHowdy() {
    console.log("Howdy");
}

exports.testMe = function testMe() {
    setTimeout(exports.sayHowdy, 5000);
    console.log("Test after Howdy");
}