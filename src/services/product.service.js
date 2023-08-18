import axios from 'axios'

export const getProducts = async (callback) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getDetailProduct = async (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
