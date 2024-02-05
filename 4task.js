function getAbgPrice(phones){
  let sum = 0;
  for(const phone of phones){
    sum = sum + phone.price;
  }
  return sum / phones.length
}


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const avg = getAbgPrice(phones)
console.log(avg.toFixed(2));

