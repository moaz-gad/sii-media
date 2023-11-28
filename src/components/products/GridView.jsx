import Product from "./Product"

const GridView = ({ products }) => {
  if (!products) {
    return null
  }
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </section>
  )
}

export default GridView
