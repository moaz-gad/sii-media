import { Link } from "react-router-dom"
import { useCartContext } from "../context/cart_context"
import CartItems from "../components/checkout/CartItems"

const CheckoutPage = () => {
  const { cart } = useCartContext()

  if (cart.length < 1) {
    return (
      <div
        className="flex items-center justify-center py-20"
        style={{ minHeight: "calc(100vh - 10rem)" }}
      >
        <div className="text-center">
          <h2 className="mb-4">cart is empty</h2>
          <Link to="/products" className="bg-primary py-2 px-3">
            Fill it
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className="page">
        <CartItems />
      </div>
    </main>
  )
}

export default CheckoutPage
