function totalQuantity(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    
    const totalLaptopPrice = laptopQuantity * laptopPrice;
    const totalTabletPrice = tabletQuantity * tabletPrice;
    const totalMobilePrice = mobileQuantity * mobilePrice;
    
    const totalBudget = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalBudget;
}

const budget =totalQuantity(4, 2, 3);
console.log(budget);