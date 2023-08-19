import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

console.log('Initial State: ', store.getState())

store.subscribe(() => {
  console.log('Store Updated', store.getState())
})

export default store
