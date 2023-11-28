import Filters from "../components/products/Filters"
import Sort from "../components/products/Sort"
import ProductList from "../components/products/ProductList"

const ProductsPage = () => {
  return (
    <main>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Filters />
          </div>
          <div className="md:col-span-2">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductsPage
