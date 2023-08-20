/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from '../../context/TotalPriceContext'

const TableCart = (props) => {
  const { products } = props
  const cart = useSelector((state) => state.cart.data)
  const { isDarkMode } = useContext(DarkMode)
  const dispatch = useTotalPriceDispatch()
  const { total } = useTotalPrice()

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((total, item) => {
        const product = products.find((p) => p.id === item.id)
        return total + product.price * item.qty
      }, 0)
      dispatch({ type: 'UPDATE', payload: { total: sum } })

      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, dispatch, products])

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
            {total.toLocaleString('id-ID', {
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
