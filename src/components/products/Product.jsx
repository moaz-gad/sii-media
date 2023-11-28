import { formatPrice } from "../../utils/helpers"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const Product = ({ image, name, price, id }) => {
  return (
    <article className="article">
      <div className="container relative bg-black rounded overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition duration-300"
        />
        <Link
          to={`/products/${id}`}
          className="link absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full opacity-0 cursor-pointer transition duration-300 group-hover:opacity-100"
        >
          <FaSearch className="text-2xl text-white" />
        </Link>
      </div>
      <footer className="mt-4 flex justify-between items-center">
        <h5 className="mb-0 font-normal capitalize ">{name}</h5>
        <p className="mb-0 font-thin  text-primary">{formatPrice(price)}</p>
      </footer>
    </article>
  )
}

export default Product
