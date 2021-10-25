function myFunction() {
    console.log("........");
    console.log("Hello World");
    console.log("........");
}

myFunction();

let a = myFunction;
a();

function sayMyName(name, secondName) {
    console.log("........");
    console.log("Hello " + name);
    console.log("........");
    console.log("Hello " + secondName);
}

sayMyName("Emily", "Charlie");

function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;

}

let tax = calculateTax(100);
console.log(tax);

setTimeout(function() {
    console.log("I waited 2 seconds");
}, 2000);


//recursize functions

let counter = 0;

function timeout() {
    setTimeout(function(){
        console.log("counter = " + counter++);
        timeout();
    }, 2000);
}

//timeout();

//if statements

let count = 8;

if (count == 10){
    console.log("Count = 4")
} else{
    console.log("Count is not 10");
}

if (count > 4){
    console.log("Count is greater than 4")
} else if(count == 4){
    console.log("Count is equal to 4");
} else if(count < 4) {
    console.log("Count is less than 4");
}

//switch conditions
let oheronNames = "youngerKids";

switch (oheronNames){
    case 'youngerKids':
        console.log("Carrie");
        console.log("Emily");
        console.log("Julie");
        break;
    case 'olderKids':
        console.log("Daniel");
        console.log("Sarah");
        console.log("Robert");
        break;
    default:
        console.log('Mike and Mary')
        break;

}