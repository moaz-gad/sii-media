const CartColumns = () => {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-8 gap-4 items-center">
        <h5 className="text-gray-500 font-normal md:col-span-4">Item</h5>

        <h5 className="text-gray-500 font-normal md:col-span-1">Price</h5>

        <h5 className="text-gray-500 font-normal md:col-span-1">Quantity</h5>

        <h5 className="text-gray-500 font-normal md:col-span-1">Subtotal</h5>

        <span className="w-8 h-8 md:col-span-1"></span>
      </div>
      <hr className="my-4 border-t-2 border-gray-300" />
    </div>
  )
}

export default CartColumns
