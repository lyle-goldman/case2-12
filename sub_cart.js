"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Lyle Goldman
   Date:   4/23/2026

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.addEventListener("load", setupCart);

function setupCart() {
    // Set up event handlers for each "Add to Order" button.
    var addButtons = document.getElementsByClassName("addButton");
    for(var i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener("click", addItem);
    }
}

function addItem(e) {
    var foodItem = e.target.nextElementSibling; // Get the item description.
    var foodID = foodItem.getAttribute("id"); // Get the id.
    var foodDescription = foodItem.cloneNode(true); // Create a copy.
    var cartBox = document.getElementById("cart"); // Get the shopping cart.

    // Check for duplicate orders.
    var duplicateOrder = false;
    for(var n = cartBox.firstElementChild; n !== null; n = n.nextElementSibling) {
        if(n.getAttribute("id") === foodID) {
            duplicateOrder = true;
            // If the item already exists, increase its count value by 1.
            n.firstChild.innerHTML = parseInt(n.firstChild.innerHTML) + 1;
            break;
        }
    }
    if(duplicateOrder === false) {
        // Otherwise, add the new item to the cart with a count value of 1.
        var orderCount = document.createElement("span");
        orderCount.innerHTML = "1";
        foodDescription.insertBefore(orderCount, foodDescription.firstChild);
        cartBox.appendChild(foodDescription);
    }
}
