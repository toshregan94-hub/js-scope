// global scope
const burgers= [`Hamburger`, `Cheeseburger`];

let featuredDrink= `Strawberry Milkshake`;

// function scoped variables
function addBurger(){
    const newBurger= `Flatburger`;
    // Add it to the burgers array using .push()
    burgers.push(newBurger);
}

// if(true) block- block scoped variable
if(true) {
    //block scoped variable using const
    const anotherNewBurger= `Maple Bacon Burger`;
    // use .push() to add it to the burgers array
    burgers.push(anotherNewBurger);

}
// function changeFeaturedDrink
function changeFeaturedDrink(){
    featuredDrink= `The Javashake`;

}
    

