import CardProduct from '../Fragments/CardProduct'

const products = [
  {
    id: 1,
    name: 'Sepatu lama',
    price: 'Rp. 100.000',
    image: '/images/product1.jpg',
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          alias magnam tempore. Obcaecati, autem fugit nobis numquam perferendis
          vel, ducimus quod cupiditate nulla nam quae, consectetur accusantium
          impedit ipsum optio.`,
  },
  {
    id: 2,
    name: 'Sepatu baru',
    price: 'Rp. 200.000',
    image: '/images/product1.jpg',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    name: 'Sepatu adidas',
    price: 'Rp. 100.000',
    image: '/images/product1.jpg',
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          alias magnam tempore. Obcaecati, autem fugit nobis numquam perferendis
          vel, ducimus quod cupiditate nulla nam quae, consectetur accusantium
          impedit ipsum optio.`,
  },
  {
    id: 4,
    name: 'Sepatu lama',
    price: 'Rp. 100.000',
    image: '/images/product1.jpg',
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          alias magnam tempore. Obcaecati, autem fugit nobis numquam perferendis
          vel, ducimus quod cupiditate nulla nam quae, consectetur accusantium
          impedit ipsum optio.`,
  },
]

const ProductsPage = () => {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {products.map((product) => {
        return (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        )
      })}
    </div>
  )
}

export default ProductsPage
