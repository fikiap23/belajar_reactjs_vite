import { Fragment, useState, useEffect, useRef } from 'react'
import Button from '../Elements/Button'
import CardProduct from '../Fragments/CardProduct'

const products = [
  {
    id: 1,
    name: 'Sepatu lama',
    price: 100000,
    image: '/images/product1.jpg',
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          alias magnam tempore. Obcaecati, autem fugit nobis numquam perferendis
          vel, ducimus quod cupiditate nulla nam quae, consectetur accusantium
          impedit ipsum optio.`,
  },
  {
    id: 2,
    name: 'Sepatu baru',
    price: 200000,
    image: '/images/product1.jpg',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    name: 'Sepatu adidas',
    price: 100000,
    image: '/images/product1.jpg',
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          alias magnam tempore. Obcaecati, autem fugit nobis numquam perferendis
          vel, ducimus quod cupiditate nulla nam quae, consectetur accusantium
          impedit ipsum optio.`,
  },
]

const email = localStorage.getItem('email')

const ProductsPage = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  // didMount
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  // didUpdate
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((total, item) => {
        const product = products.find((p) => p.id === item.id)
        return total + product.price * item.qty
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  const handlerLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
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

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || [])

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }]
    localStorage.setItem('cart', JSON.stringify(cartRef.current))
  }

  const totalPriceRef = useRef(null)

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row'
    } else {
      totalPriceRef.current.style.display = 'none'
    }
  }, [cart])
  console.log(totalPriceRef)

  return (
    <Fragment>
      <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10 mb-5">
        <p>{email}</p>
        <Button classname="bg-red-600 ml-5" onClick={handlerLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="w-3/5 flex flex-wrap">
          {products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}></CardProduct.Header>
                <CardProduct.Body name={product.name}>
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
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.id)
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{item.qty}</td>
                    <td>
                      {product.price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      })}
                    </td>
                    <td>
                      {(product.price * item.qty).toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
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
