/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If this is called globally it will display the window or console.
* 2. If a function is called by an object. the object to the left of the dot takes on THIS
* 3. If this is called within a constructor function, this refers to a specific instance within the object.
* 4. If a prototype is called said function can replace an inherent this. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this //period this will display the full window
// Principle 2

// code example for Implicit Binding
const hunger = {
    stomach: 'growling',
    speak: function (){
        console.log(`My stomach is ${this.stomach}`)
    }
}
hunger.speak();
// Principle 3

// code example for New Binding

function Food(food, calories) {
    this.name = food,
    this.calories = calories,
    this.speak = function(){
        console.log(`${this.name} has ${this.calories} calories.`);
    }
}
let newFood = new Food('Tuna', 370);
newFood.speak();
// let newFood = new Food

// Principle 4

// code example for Explicit Binding

function motorCycle(){
    console.log(this.make)
}

let myMotorCycle ={
    make: 'Yamaha',
    model: 'WR450f',
}

motorCycle.call(myMotorCycle);
