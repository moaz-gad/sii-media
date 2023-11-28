import { useFilterContext } from "../../context/filter_context"
import { getUniqueValues, formatPrice } from "../../utils/helpers"
import { FaCheck } from "react-icons/fa"

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, "category")
  const companies = getUniqueValues(all_products, "company")
  const colors = getUniqueValues(all_products, "colors")

  return (
    <section className="space-y-5">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <div className="mb-5">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="py-2 px-2  bg-[hsl(210,36%,96%)]  rounded border-transparent"
            />
          </div>

          <div className="mb-5">
            <h5 className="mb-2 font-bold">category</h5>
            <div>
              {categories.map((c, index) => (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  className={`${
                    category === c.toLowerCase() ? "active" : null
                  } block my-1 py-1 text-capitalize  cursor-pointer font-thin`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h5 className="mb-2 font-bold">company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="w-50 py-2 px-4 bg-[hsl(210,36%,96%)] rounded border-transparent"
            >
              {companies.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <h5 className="mb-2 font-bold">colors</h5>
            <div className="flex items-center">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "opacity-100" : "opacity-50"
                      } mr-2 flex items-center justify-center`}
                    >
                      all
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    } mr-2`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>
          {/* price */}
          <div className="mb-5">
            <h5 className="mb-2 font-bold">price</h5>
            <p className="mb-1">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
              className=""
            />
          </div>

          <div className="flex items-center space-x-2 capitalize text-lg mb-5">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
        </form>
        <button
          type="button"
          onClick={clearFilters}
          className="bg-[hsl(360,67%,44%)] text-white py-1 px-4 mt-2 rounded"
        >
          clear filters
        </button>
      </div>
    </section>
  )
}

export default Filters
