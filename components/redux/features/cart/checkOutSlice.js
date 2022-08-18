import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const checkOutSlice = createSlice({
    name : 'Check-Out',
    initialState,
    reducers: {
        checkOut(state, {payload}) {
            const { id } = {payload};
            
            const find = state.find((item) => item.id === id);
            if (find) {
                return state.map((item) => item.id === id
                ?{
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
                );
            } else {
                state.push({
                    ...payload,
                    quantity: 1,
                });
            }
        },
    }
});

export const {addToCart, checkOut, increment, decrement, removeItem, clear} =
 checkOutSlice.actions;
const checkOutReducer = checkOutSlice.reducer;

export default checkOutReducer;






    