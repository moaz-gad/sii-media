import { FaTrash } from "react-icons/fa"
import { useCartContext } from "../../context/cart_context"
import { formatPrice } from "../../utils/helpers"
import AmountButtons from "./AmountButtons"

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()

  const increase = () => {
    toggleAmount(id, "inc")
  }

  const decrease = () => {
    toggleAmount(id, "dec")
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-8 gap-4 items-center text-center md:text-left py-4 border-b border-gray-300">
      {/* Product Image */}
      <div className="md:col-span-1">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg mx-auto"
        />
      </div>

      {/* Product Info */}
      <div className="md:col-span-3">
        <h5 className="text-sm md:text-base font-semibold">{name}</h5>
        <p className="text-xs md:text-sm text-gray-500">
          Color:{" "}
          <span
            className="w-2 h-2 inline-block rounded-full"
            style={{ backgroundColor: color }}
          ></span>
        </p>
      </div>

      {/* Price */}
      <div className="md:col-span-1">
        <h5 className="text-sm md:text-base text-primary-500 font-semibold">
          {formatPrice(price)}
        </h5>
      </div>

      {/* Quantity */}
      <div className="md:col-span-1">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
      </div>

      {/* Subtotal */}
      <div className="md:col-span-1">
        <h5 className="text-sm md:text-base text-primary-500 font-semibold">
          {formatPrice(price * amount)}
        </h5>
      </div>

      {/* Remove Button */}
      <div className="md:col-span-1">
        <button
          className="text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-xs md:text-sm"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  )
}

export default CartItem
