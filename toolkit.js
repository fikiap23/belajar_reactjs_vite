import toolkit from '@reduxjs/toolkit'

const { configureStore, createAction, createReducer } = toolkit
const addToCart = createAction('ADD_TO_CART')
const createSession = createAction('CREATE_SESSION')

// Reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload)
  })
})

const loginReducer = createReducer(false, (builder) => {
  builder.addCase(createSession, (state, action) => {
    return action.payload // Return the new state value
  })
})

// Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer, // Add the loginReducer to the store
  },
})

console.log('Initial State: ', store.getState())

// Subscribe to Store Changes
store.subscribe(() => {
  console.log('Updated State: ', store.getState())
})

// Dispatch Actions
store.dispatch(addToCart({ id: 1, qty: 10 }))
store.dispatch(addToCart({ id: 2, qty: 20 }))

store.dispatch(createSession(true)) // Log in
store.dispatch(createSession(false)) // Log out
