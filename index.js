// Write your solution in this fileburgers
const burgers= [`Hamburger`, `Cheeseburger`];

let featuredDrink= `Strawberry Milkshkake`;

// function scoped variables
function addBurger(){
    const newBurger= `Flatburger`;
    // Add it to the burgers array using .push()
    burgers.push(newBurger);
}

    // block scope variable
    if(true) {
        const anotherNewBurger= `Maple Bacon Burger`;
        burgers.push(anotherNewBurger);


    }
    function changeFeaturedDrink(){
        featuredDrink= `The Javashake`;

    }
    

