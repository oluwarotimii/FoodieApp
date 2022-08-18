const {createSelector } = require('@reduxjs/toolkit');

const cartSelector = (state) => state.cart;
const checkOutSelector = (state) => state.checkOut;

export const cartTotalSelector = createSelector([createSelector], (cart) =>
cart.reduce((total, cart) => (total += current.quantity),0)
);
export const cartTotalPriceSelector = createSelector([cartSelector], (cart) => 
cart.reduce(
    (total, current) => (total += current.quantity * current.price),
    0
)
); 

export const checkOutTotalSelector = createSelector([checkOutSelector], (checkOut) =>
checkOut.reduce((total, checkOut) => (total += current.quantity),0)
);
export const checkOutTotalPriceSelector = createSelector([checkOutSelector], (checkOut) => 
checkOut.reduce(
    (total, current) => (total += current.quantity * current.price),
    0
)
); 

