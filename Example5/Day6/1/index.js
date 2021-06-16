const fs = require("fs");

//Object Destructing
const obj = {p: 42, q: true};
const {p} = obj;
console.log(p);
console.log(obj);

//Array Destructing
const arr = ['one', 'two', 'three'];
const [first, second] = arr;
console.log(second);
console.log(arr);

fs.readFile("readme.txt", function(err, data){
    if (err) throw err;
    console.log(data.toString());
})

var buffering = new Buffer.alloc(5, fs.readFileSync("readme.txt").toString(), "utf8")
console.log(buffering.toString());