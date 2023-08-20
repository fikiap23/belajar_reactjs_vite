import { Fragment, useState, useEffect, useContext } from 'react'
import { DarkMode } from '../../context/DarkMode'
import { useLogin } from '../../hooks/useLogin'
import { getProducts } from '../../services/product.service'
import CardProduct from '../Fragments/CardProduct'
import TableCart from '../Fragments/TableCart'
import Navbar from '../Layouts/Navbar'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  useLogin()
  const { isDarkMode } = useContext(DarkMode)

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  })

  return (
    <Fragment>
      <Navbar></Navbar>
      <div
        className={`flex justify-center ${
          isDarkMode ? 'bg-slate-900' : 'bg-white'
        }`}
      >
        <div className="w-3/5 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.Header
                    image={product.image}
                    id={product.id}
                  ></CardProduct.Header>
                  <CardProduct.Body name={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    id={product.id}
                  ></CardProduct.Footer>
                </CardProduct>
              )
            })}
        </div>
        <div className="w-2/5">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  )
}

export default ProductsPage
