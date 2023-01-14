import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addcart: (state, action) => {
            const FindProdect = state.find((prodect) => prodect.id === action.payload.id)
            console.log(FindProdect);
            if (FindProdect) {
                FindProdect.quantity += 1;
            } else {
                const prodectClone = {...action.payload, quantity:1}
                state.push(prodectClone)
            }
         },
        deletefromcart: (state, action) => {
            return state.filter((prodect)=>prodect.id !== action.payload.id)
         },
        clearcart: (state, action) => { 
            return []
        }
    }
});
export const { addcart, deletefromcart, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
