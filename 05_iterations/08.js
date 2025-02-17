const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){ // accumlator and currentvalue
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//    return acc + currval
// }, 3)

// const myTotal = myNums.reduce((acc, currval) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mob dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 6999
    },

]
 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
