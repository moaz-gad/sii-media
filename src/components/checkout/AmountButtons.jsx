const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="grid grid-cols-3 w-40 justify-items-center items-center">
      <button
        type="button"
        className="bg-transparent border-transparent cursor-pointer p-4 w-10 h-5 flex items-center justify-center font-bold"
        onClick={decrease}
      >
        -
      </button>
      <h2 className="text-center font-extrabold">{amount}</h2>
      <button
        type="button"
        className="bg-transparent border-transparent cursor-pointer p-4 w-10 h-5 flex items-center justify-center font-bold"
        onClick={increase}
      >
        +
      </button>
    </div>
  )
}

export default AmountButtons
