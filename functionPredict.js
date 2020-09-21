//Created by Shelley Ophir
//Coding Dojo Sep. 21,2020
//go through the following code snippets and predict the output 

//Predict 1

function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

//Predict 1 prediction
//Hello
//note, it never prints "World" as the return statement ends the function immediately.

///////////////////////////////////

//Predict 2

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//Predict 2 prediction:
//Summing Numbers!, num1 is 3, num2 is 5, Summing Numbers!, num1 is 4, num2 is 7, 8, 11

///////////////////////////////////////

//Predict 3

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

//Predict 3 prediction:
//(prints nothing as the function is never called)
