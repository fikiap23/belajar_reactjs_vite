import CardProduct from '../Fragments/CardProduct'

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header image="/images/product1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu baru">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          alias magnam tempore. Obcaecati, autem fugit nobis numquam perferendis
          vel, ducimus quod cupiditate nulla nam quae, consectetur accusantium
          impedit ipsum optio.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 100.000"></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/product1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu baru">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          alias magnam tempore. Obcaecati, autem fugit nobis numquam perferendis
          vel, ducimus quod cupiditate nulla nam quae, consectetur accusantium
          impedit ipsum optio.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 100.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  )
}

export default ProductsPage
