import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import { useLogin } from '../../hooks/useLogin'
import Button from '../Elements/Button'

const Navbar = () => {
  const username = useLogin()
  const [totalCart, setTotalCart] = useState(0)
  const cart = useSelector((state) => state.cart.data)
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((total, item) => {
        return total + item.qty
      }, 0)
      setTotalCart(sum)
    }
  }, [cart])
  const handlerLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }
  return (
    <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10 mb-5">
      <p>{username}</p>
      <Button classname="bg-red-600 ml-5" onClick={handlerLogout}>
        Logout
      </Button>

      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
        {totalCart}
      </div>
      <Button
        className=" bg-black px-10 mx-5 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? 'Light' : 'Dark'}
      </Button>
    </div>
  )
}
export default Navbar
