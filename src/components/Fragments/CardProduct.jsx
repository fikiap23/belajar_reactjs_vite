/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Button from '../Elements/Button'

const CardProduct = (props) => {
  const { children } = props
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow my-2 mr-2 flex flex-col justify-between">
      {children}
    </div>
  )
}

const Header = (props) => {
  const { image, id } = props
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  )
}

const Body = (props) => {
  const { name, children } = props
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}...
        </h5>
        <p className="text-sm text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  )
}

const Footer = (props) => {
  const { price, handleAddToCart, id } = props
  return (
    <div className="flex items-center justify-between border-t border-gray-700 p-5">
      <span className="text-xl font-bold text-white">
        {' '}
        {price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to Cart
      </Button>
    </div>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct
