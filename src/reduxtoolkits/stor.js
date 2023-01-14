import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cart-slice'
import prodectSlice from './slice/prodect-slice'

export const store = configureStore({
    reducer: {
    products: prodectSlice,
    cart: cartSlice,
  },
})