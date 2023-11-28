import { useCartContext } from "../../context/cart_context"
import { formatPrice } from "../../utils/helpers"
import { Link } from "react-router-dom"

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()

  return (
    <div className="mt-12 flex justify-center md:justify-end">
      <article className="border border-gray-200 rounded-lg p-6">
        <h5 className="grid grid-cols-2">
          <span>subtotal :</span>
          <span className="text-primary-500">{formatPrice(total_amount)}</span>
        </h5>
        <p className="grid grid-cols-2 mt-4">
          <span>shipping fee :</span>
          <span className="text-primary-500">{formatPrice(shipping_fee)}</span>
        </p>
        <hr className="my-4" />
        <h4 className="grid grid-cols-2">
          <span>order total :</span>
          <span className="text-primary-500">
            {formatPrice(total_amount + shipping_fee)}
          </span>
        </h4>
      </article>
      <button className="btn block md:w-auto md:ml-4 mt-4 md:mt-0">
        login
      </button>
    </div>
  )
}

export default CartTotals
