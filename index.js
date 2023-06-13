
// function(){
//     console.log("Yet more razzling");
// }

(function(){
    console.log("Yet more razzling");
})

let func = function(){
    console.log("Yet more razzling");

}

console.log(func);
console.log(func());


//IIFE


let sum = (function(num){
    return 3 + num
})(3);

console.log((function(num){
    return 3 + num
})(3));

const array = (function (thingtoAdd){
    const base = 3;
    return [
        function(){
            return base + thingtoAdd
        }, 
        function(){
            return base;
        }
    ]
})(2);
console.log(array[0]());
console.log(array[1]());

function demoChain(name){
    //let part1;
    return function(thing){
        //let part2;
        return function(thing2){
           console.log(`${thing.toUpperCase()} ${thing2}, ${name}`);
        }
    }
}

console.log(demoChain("Amirah")("Hello")("there"));


// ******************************************

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(character = "*"){
    return function (sth = 'special'){
        return `You are ${character}${sth}${character}!`;
    }
}