import { useFilterContext } from "../../context/filter_context"
import GridView from "./GridView"

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

  if (products.length < 1) {
    return (
      <h5 className="text-xl text-center text-gray-600">
        No products available for these criteria.
      </h5>
    )
  }

  return <GridView products={products} />
}

export default ProductList
