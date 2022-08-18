import {configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice';
import checkOutReducer from './cart/checkOutSlice';

//import productsReducer from "./productSlice";
//mport uiReducer from './uislice';

const store = configureStore({
    reducer: {
        // products: productReducer,
        cart: cartReducer,
        //ui: uiReducer,
        checkOut: checkOutReducer,
    },
})
export default store;