import { Fragment, useState, useEffect, useRef } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { getProducts } from '../../services/product.service'
import Button from '../Elements/Button'
import CardProduct from '../Fragments/CardProduct'

const ProductsPage = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([])
  const username = useLogin()

  // didMount
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  // didUpdate
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((total, item) => {
        const product = products.find((p) => p.id === item.id)
        return total + product.price * item.qty
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, products])

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  })

  const handlerLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      )
    } else {
      setCart([...cart, { id, qty: 1 }])
    }
  }

  const totalPriceRef = useRef(null)

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row'
    } else {
      totalPriceRef.current.style.display = 'none'
    }
  }, [cart])

  return (
    <Fragment>
      <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10 mb-5">
        <p>{username}</p>
        <Button classname="bg-red-600 ml-5" onClick={handlerLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="w-3/5 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.Header
                    image={product.image}
                  ></CardProduct.Header>
                  <CardProduct.Body name={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    id={product.id}
                    handleAddToCart={handleAddToCart}
                  ></CardProduct.Footer>
                </CardProduct>
              )
            })}
        </div>
        <div className="w-2/5">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((p) => p.id === item.id)
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>{item.qty}</td>
                      <td>
                        {product.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </td>
                      <td>
                        {(product.price * item.qty).toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </td>
                    </tr>
                  )
                })}
              <tr className="font-bold" ref={totalPriceRef}>
                <td colSpan={3}>Total Price</td>
                <td>
                  {totalPrice.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductsPage
