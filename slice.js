import toolkit from '@reduxjs/toolkit'

const { configureStore, createSlice } = toolkit
// Buat slice untuk keranjang menggunakan createSlice
const cartSlice = createSlice({
  name: 'cart', // Nama slice
  initialState: [], // State awal dari keranjang
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload) // Ubah state untuk menambahkan item ke keranjang
    },
  },
})

// Buat slice untuk status login menggunakan createSlice
const loginSlice = createSlice({
  name: 'login', // Nama slice
  initialState: false, // State awal dari status login
  reducers: {
    setLoginStatus: (state, action) => {
      return action.payload // Ubah state untuk mengatur status login
    },
  },
})

// Konfigurasi Redux store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Tambahkan reducer dari cartSlice ke dalam store
    login: loginSlice.reducer, // Tambahkan reducer dari loginSlice ke dalam store
  },
})

console.log('State Awal: ', store.getState())

// Langganan untuk Perubahan State
store.subscribe(() => {
  console.log('State Terbaru: ', store.getState())
})

// Kirimkan aksi untuk berinteraksi dengan store
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 10 }))
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }))

store.dispatch(loginSlice.actions.setLoginStatus(true)) // Masuk
store.dispatch(loginSlice.actions.setLoginStatus(false)) // Keluar
