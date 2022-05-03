const itemsObject = [
    {quantity: 1, price: 200},
    {quantity: 3, price: 350},
    {quantity: 5, price: 400}
]

// Given the array, implement a function for generating a new array which doubles the quantity and price in each object.


const Q1 = itemsObject.map ((x) => {
  x.quantity *= 2;
  x.price *= 2;
  return x
})

console.log(Q1)

// Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.

const Q2 = itemsObject.filter((x) => {
  return x.quantity > 2 && x.price > 300
  });
   
console.log(Q2)

//   Given the array, implement a function to calculate the total value of the items.
function Q3 (arr){
    let totalQuantity = 0, totalPrice = 0
    arr.forEach (arr => {
      totalQuantity += arr.quantity;
      totalPrice += arr.price;
    });
    return {quantity:totalQuantity,price:totalPrice}
  }
  
  console.log(Q3(itemsObject))


const string = ' Perhaps The Easiest-to-understand  Case For Reduce Is To Return The Sum Of All The Elements In An Array ';

// Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
function Q4 (str) {
    return str.split('-').join(' ').split(' ').filter(e => String(e).trim()).join(' ').toLowerCase()
}

console.log(Q4(string))





















