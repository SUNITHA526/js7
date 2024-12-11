//js example-1
var x=200;
function a(){
    var x=100;
    console.log(x);
}
a()
console.log(x,"6th line");

//example-2
function a(){
    console.log(100 +z);
}
var z=100;
console.log(z);
a()

// example-3
var z=500;
function a(){
    function b(){
        function c(){
            console.log(100 +z);  
        }
        c()
    }
    b()
}
a()
var z=100;
console.log(z);

// example-4
var z=100;
function a(){
    function b(){
        console.log("b function");
    }
    b()
}
a()
console.log(z);

// Problem solving example-1
var userInput = prompt("Enter a no.:")
var max = userInput[0];
for(i=0; i<userInput.length; i++){
if(max<userInput[i]){
    max=userInput[i];
}
}
console.log(max, "highest value");

// example-2
var userInput = prompt("Enter a no.:")
var min = userInput[0];
for(i=0; i<userInput.length; i++){
if(min>userInput[i]){
    min=userInput[i];
}
}
console.log(min, "lowest value");

// example-3
var min=userInput[0];
var max=userInput[0];
var userInput = prompt("Enter a no.:")
var min = userInput[0];
for(i=0; i<userInput.length; i++){
if(min>userInput[i]){
    min=userInput[i];
}
if(max<userInput[i]){
     max=userInput[i];
}
}
console.log(min, "lowest value");
console.log(max, "highest value");
console.log(Number(min)+ Number(max), "Total Sum");