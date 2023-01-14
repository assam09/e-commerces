import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProdects = createAsyncThunk("ProdectSlice/fetchProdects", async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    return data;
})

const ProdectSlice = createSlice({
    initialState: [],
    name: "ProdectSlice",
    reducers: {},
    extraReducers: (bulider) => {
        bulider.addCase(fetchProdects.fulfilled, (state,action) => {
            return action.payload;
        })
    }
});

export const { } = ProdectSlice.actions

export default ProdectSlice.reducer