var varNum = 10;
var varString = "Hello World";
var arrValues = [1, 2, 3, 4, 5];
var objValue = { "name": "Balakrthikeyan", "exp" : "10"};
var objValues = [
    { "name": "bala", "company" : "Unimoni", "exp" : "7+"},
    { "name": "ram", "company" : "Hexware", "exp" : "6+"},
    { "name": "vivek", "company" : "adlabs", "exp" : "8+"}
];
//console.log(varString);
//console.log(arrValues.join(','));
//console.log(typeof objValues);

function myFirstFunction(arg1, arg2) {
    if(arguments.length > 0) {
        //Get arguments length 
        console.log(arguments.length);
        var args = Array.prototype.slice.call(arguments, 0);
        console.log(args.join(', '));
    }

    if(arg1 != undefined && arg2 != undefined) {
        console.log(arg1 + " has " + arg2 + " of experience");
    } else {
        console.log(objValue.name + " has " + objValue.exp + " of experience");
    }   
}

// Example for updating primitive data type
var objValues2 = objValues
// objValues2 = [
//     { "name": "satis", "company" : "coimbatore", "exp" : "7+"}
// ];

// Example for assigning primitive data type
objValues2[0].name = "satis"; 

//Global scope variable
var i = 0;
function mySecondFunction(arg) {
    var html = "";
    switch (arg) {
    case 'do':        
        i = 0; //Local scope variable
        html +="<ul>";     
        do {
            html += "<li>" + objValues[i].company + '</li>';
            i++;
        } while (i < objValues.length);
        html +="</ul>";
        break;
    case 'while':
        i = 0; //Local scope variable
        html +="<ul>";
        while (i < objValues.length) {
            html += "<li>" + objValues[i].name + '</li>';
            i++;
        }
        html +="</ul>";
        break;   
    }
    document.getElementById('result').innerHTML  = html   
}

//IIFE function
(function(a, b){ 
    console.log(a+b); 
})(10, 30);

//Anonymous function
var doAllTheThings = function() {
    console.log("We did all the things! As Variable");
}
doAllTheThings();

var car = {
    model: "Hyundai",
    price: 100000,
    name: "i10",
    yearMake: 2000,
    printPrice : function (){
        return "Price Rs." + this.price;
    },
    printMake : function (){
        return "Year of : " + this.yearMake;
    },
    printAllDetails : function (){
        return this.model + ' ' + this.name + ' of ' + this.yearMake + ' make is for Rs.' + this.price
    }
}

var price = car.printPrice();
console.log(price);
car.price = 300000;
var alldetails = car.printAllDetails();
console.log(alldetails);