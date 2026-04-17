// Write your solution in this fileburgers
let burgers= [`Hamburger`, `Cheeseburger`];

let featuredDrink=`Strawberry Milkshkake`;

// function scoped variables
function addBurger(){
    let newBurger= `Flatburger`;
    // Add it to the burgers array using .push()
    burgers.push(newBurger);
}

    // block scope variable
    if(true) {
        let anotherNewBurger= `Maple Bacon Burger`;
        burgers.push(anotherNewBurger);


    }
    function changeFeaturedDrink(){
        featuredDrink= `The Javashake`;

    }
    

