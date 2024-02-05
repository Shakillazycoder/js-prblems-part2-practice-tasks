function getMin(numbers){
   let min = numbers[0]
   for(const num of numbers){
    if(num < min){
        min = num;
    }
   }
   return min
}

const numbers = [20000, 16000, 50000, 100000, 12000, 30000, 35000];
const min = getMin(numbers);
// console.log('min value is', min);  


function maxQuantity(shirtQuantity, paintQuantity, shoeQuantity ){
   const shirtPrice = 1500;
   const paintPrice = 1200;
   const shoePrice = 4000;

   const totalShirtPrice = shirtPrice * shirtQuantity;
   const totalPaintPrice = paintPrice * paintQuantity;
   const totalShoePrice = shoePrice * shoeQuantity;

   const totalPrice = totalShirtPrice + totalPaintPrice + totalShoePrice;
   return totalPrice;
}

const price = maxQuantity(3, 2, 1);
// console.log('Money needed', price)


const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]

function getHighestPrice(phones){
    let highest = phones[0]
 for(const phone of phones){
    if (phone.price > highest.price){
        highest = phone
    }
 }
 return highest
}

const highest = getHighestPrice(phones);
// console.log("Highest price is", highest)


function layerDiscountPrice(quantity){
 const first100price = 100;
 const second100Price = 90;
 const above200Price = 70;

 if (quantity <= 100){
    const totalPrice = quantity * 100;
    return totalPrice;
 } else if (quantity <=200){
    const first100Total = 100 * first100price;
    const remainingQuantity = quantity - 100;
    const second100Total = remainingQuantity * second100Price;
    const totalPrice = first100Total + second100Total;
    return totalPrice;
 }
 else{
    const first100Total = 100 * first100price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const above200Total = remainingQuantity * above200Price;
    const totalPrice = first100Total + second100Total + above200Total;
    return totalPrice
 }

}
const total = layerDiscountPrice(149);
console.log(total)

// calculator

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
function subtract(num1, num2){
    const subtract = num1 - num2;
    return subtract;
}
function multiply(num1, num2){
    const multiply = num1 * num2;
    return multiply;
}
function divide(num1, num2){
    const divide = num1 / num2;
    return divide;
}

function calculator(a, b, operation){
    if (operation === 'add'){
        const result = add (a, b);
        return result;
    }
    else if (operation === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
      const result = multiply(a, b);
      return result;
    }
    else if(operation === 'divide'){
        const result = divide(a, b);
        return result;
    }
}

const result = calculator(6, 6, 'divide');
console.log(result);