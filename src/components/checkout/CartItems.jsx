import { useCartContext } from "../../context/cart_context"
import { Link } from "react-router-dom"
import CartColumns from "./CartColumns"
import CartItem from "./CartItem"
import CartTotals from "./CartTotals"

const CartItems = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="flex justify-between mt-8">
        <Link
          to="/products"
          className="py-1 px-2 bg-primary text-white rounded-md"
        >
          continue shopping
        </Link>
        <button
          type="button"
          className="py-1 px-2 bg-black text-white rounded-md"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  )
}

export default CartItems
