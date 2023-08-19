import { legacy_createStore } from 'redux'

// Action Type
const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS'
const ADD_TO_CART = 'ADD_TO_CART'

// Action Creator
const setLoginStatus = (status) => ({
  type: SET_LOGIN_STATUS,
  payload: status,
})

const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
})

// Reducer
const cardReducer = (
  state = {
    login: false,
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    }
    case SET_LOGIN_STATUS: {
      return {
        ...state,
        login: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

// Store
const store = legacy_createStore(cardReducer)

// Logging Initial State
console.log('Initial State: ', store.getState())

// Subscribe to Store Changes
store.subscribe(() => {
  console.log('Updated State: ', store.getState())
})

// Dispatch Actions
store.dispatch(addToCart({ id: 2, qty: 20 }))

// Change Login Status
store.dispatch(setLoginStatus(true))
store.dispatch(setLoginStatus(false))
