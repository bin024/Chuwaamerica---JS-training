const itemsObject = [
    {quantity: 1, price: 200},
    {quantity: 3, price: 350},
    {quantity: 5, price: 400}
]

// Given the array, implement a function for generating a new array which doubles the quantity and price in each object.

function Q1 (arr,num) {
  var result = []
  for (var i in arr){
    var temp = {}
    for (var j in arr[i]){
      temp[j] = arr[i][j]*num
    }
    result.push(temp)
  }
  return result
}

console.log(Q1(itemsObject,2))
// const Q1 = itemsObject.map (({quantity,price}) => {
//   return {quantity:quantity*2, price:price*2}
// });

// console.log(Q1)

// Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.

function Q2 (arr,quantity,price) {
  var result = []
  for (var i in arr){
    var temp = {}
    for (var j in arr[i]){
      temp[j] = arr[i][j]
    }
    if (temp.quantity > quantity && temp.price > price){
      result.push(temp)
    }
  }
  return result
}

console.log(Q2(itemsObject,2,300))

// const Q2 = itemsObject.filter((x) => {
//   return x.quantity > 2 && x.price > 300
//  });
   
// console.log(Q2)

  // Given the array, implement a function to calculate the total value of the items.
function Q3 (arr){
  let totalQuantity = 0, totalPrice = 0
  arr.forEach (arr => {
    totalQuantity += arr.quantity;
    totalPrice += arr.price;
  });
  return {quantity:totalQuantity,price:totalPrice}
}

console.log(Q3(itemsObject))

// const Q3 = itemsObject.reduce ((total,x) =>
//   total + x.price,0);

// console.log(Q3)


const string = ' Perhaps The Easiest-to-understand  Case For Reduce Is To Return The Sum Of All The Elements In An Array ';

// Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
function Q4 (str) {
    return str.split('-').join(' ').split(' ').filter(e => String(e).trim()).join(' ').toLowerCase()
};

console.log(Q4(string))

























