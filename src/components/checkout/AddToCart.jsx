import { useState } from "react"
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa"
import { useCartContext } from "../../context/cart_context"
import AmountButtons from "./AmountButtons"

const AddToCart = ({ product }) => {
  // add to cart
  const { addToCart } = useCartContext()
  const { id, stock, colors } = product
  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <span className="mr-2 font-semibold">Colors:</span>
        <div className="flex">
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ background: color }}
              className={`${
                mainColor === color ? "color-btn active" : "color-btn"
              } mr-2`}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link
          to="/cart"
          className="btn ml-4 bg-primary px-3 py-1 rounded text-white"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          Add to Cart
        </Link>
      </div>
    </div>
  )
}

export default AddToCart
