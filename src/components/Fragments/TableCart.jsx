/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'

const TableCart = (props) => {
  const { products } = props
  const cart = useSelector((state) => state.cart.data)
  const [totalPrice, setTotalPrice] = useState(0)
  const { isDarkMode } = useContext(DarkMode)

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

  const totalPriceRef = useRef(null)

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row'
    } else {
      totalPriceRef.current.style.display = 'none'
    }
  }, [cart])

  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-5 ${
        isDarkMode && 'text-white'
      }`}
    >
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
  )
}

export default TableCart
