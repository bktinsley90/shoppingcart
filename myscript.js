let userName = prompt("What is your name");
let productOne = prompt("First Product Name");
let priceOne = prompt("What is the price of the first product?");
if (priceOne === "0") {
    alert("The price can not be zero please enter a valid price");
}
let producttwo = prompt("Second Product Name");
let priceTwo = prompt("What is the price of product two?");
let productthree = prompt("Third Product Name");
let priceThree = prompt("What is the price of product three?");
let totalPrice = Number(priceOne)+Number(priceTwo)+Number(priceThree) ;



console.log(totalPrice)
let grandTotal = totalPrice + (totalPrice* .0625);
console.log(`${userName}, Your Grand Total is ${grandTotal}`)



