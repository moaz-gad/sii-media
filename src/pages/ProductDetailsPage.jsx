import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useProductsContext } from "../context/products_context"
import { single_product_url as url } from "../utils/constants"
import { formatPrice } from "../utils/helpers"
import Loading from "../components/Loading"
import Error from "../components/Error"
import AddToCart from "../components/checkout/AddToCart"
import ProductImages from "../components/products/ProductImages"
import Stars from "../components/products/Stars"

const ProductDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }, [error])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <div className="flex justify-start">
            <button className="bg-primary px-4 py-2 rounded-md text-white font-medium hover:bg-gray-400">
              Back to products
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <ProductImages images={images} />
            </div>

            <div className="mt-4 sm:mt-0 sm:ml-10">
              <div className="">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl capitalize">
                  {name}
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-base text-gray-500">
                    <Stars stars={stars} reviews={reviews} />
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {formatPrice(price)}
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-900 font-thin">
                    {description}
                  </p>
                  <p className="text-lg text-gray-900 font-thin">
                    <span className="font-bold">Available</span> :{" "}
                    {stock > 0 ? "In stock" : "Out of stock"}
                  </p>
                  <p className="text-lg text-gray-900 font-thin">
                    <span className="font-bold">SKU</span> : {sku}
                  </p>
                  <p className="text-lg text-gray-900 font-thin">
                    <span className="font-bold">Brand</span>: {company}
                  </p>
                </div>
                <hr className="border-t border-gray-300" />

                {stock > 0 && <AddToCart product={product} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
