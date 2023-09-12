//Question3_In the following shopping cart add, remove, edit items.

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' to the beginning if not already added
shoppingCart.unshift('Meet')
// Add 'Sugar' to the end if not already added
shoppingCart.push('Sugar')
// Remove 'Honey' if allergic
//shoppingCart.pop('Honey')
shoppingCart.splice(4, 1)
// Modify 'Tea' to 'Green Tea'
shoppingCart[3] = 'Green Tea' 
console.log(shoppingCart);






