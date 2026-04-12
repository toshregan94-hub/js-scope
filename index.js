// Write your solution in this file!

const burgers=("Hamburgers", "Cheeseburger");
let featuredDrink=("Strawberry Milkshake");

// function scoped variables
function addBurger(){
    const newBurger= `Flatburger`;
    burgers.push(newBurger);
    addBurger();

    // block scope variable
    if(true) {
        const anotherNewBurger= "Maple Bacon Burger";
        burgers.push(anotherNewBurger);


    }
    function changeFeaturedDrink(){
        featuredDrink= "The Javashake";

    }
    changeFeaturedDrink();
}
