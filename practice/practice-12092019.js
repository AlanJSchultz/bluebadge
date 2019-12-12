//jshint esversion:7

// ternaries

let myAge = 62;

if (myAge > 30) {
    console.log("Your're Old");
} else {
    console.log("You're Young");
}

myAge > 30 ? console.log("Your're Old") : console.log("You're Young");



let myExample = 4;

myExample != null || myExample != undefined ? console.log("It exists and is true") : console.log("It doesn't exist and it is false");

myExample ? console.log("It exists and is true") : console.log("It doesn't exist and it is false");

