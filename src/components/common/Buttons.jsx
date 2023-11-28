import { FaShoppingCart, FaUserPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useProductsContext } from "../../context/products_context"
import { useCartContext } from "../../context/cart_context"

const Buttons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items } = useCartContext()

  return (
    <div className="cart-btn-wrapper grid grid-cols-2 items-center w-225">
      <Link
        to="/cart"
        className="cart-btn text-gray-700 text-1.5rem tracking-wide flex items-center"
        onClick={closeSidebar}
      >
        Cart
        <span className="cart-container flex items-center relative">
          <FaShoppingCart className="h-6 ml-1.5" />
          <span className="cart-value absolute top-[-10px] right-[-16px] bg-primary w-5 h-5 flex items-center justify-center rounded-full text-white text-0.75rem">
            {total_items}
          </span>
        </span>
      </Link>
      <button
        type="button"
        className="auth-btn flex items-center bg-transparent border-transparent text-1.5rem cursor-pointer text-gray-700 tracking-wide"
      >
        Login <FaUserPlus className="ml-1.5" />
      </button>
    </div>
  )
}

export default Buttons
