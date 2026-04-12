// Write your solution in this file!

let burgers=[`Hamburgers`, `Cheeseburger`];
let featuredDrink=[`Strawberry Milkshake`];

// function scoped variables
function addBurger(){
    let newBurger= `Flatburger`;
    burgers.push(newBurger);

    // block scope variable
    if(true) {
        let anotherNewBurger= `Maple Bacon Burger`;
        burgers.push(anotherNewBurger);


    }
    function changeFeaturedDrink(){
        featuredDrink= `The Javashake`;

    }
}
