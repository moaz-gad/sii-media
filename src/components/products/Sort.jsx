import { useFilterContext } from "../../context/filter_context"
import { BsFillGridFill, BsList } from "react-icons/bs"

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()

  return (
    <section className="flex flex-wrap items-center justify-between mb-8 gap-2 md:flex-nowrap">
      <div className="flex items-center gap-2">
        <div className="btn-container gap-1 mr-4 flex">
          <button
            onClick={setGridView}
            className={`${
              grid_view ? "bg-black text-white" : "bg-transparent text-black"
            } border border-black w-6 h-6 flex items-center justify-center  cursor-pointer`}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={setListView}
            className={`${
              !grid_view ? "bg-black text-white" : "bg-transparent text-black"
            } border border-black w-6 h-6 flex items-center justify-center  cursor-pointer`}
          >
            <BsList />
          </button>
        </div>

        <p className="capitalize mb-0 font-thin">
          {products.length} products found
        </p>
      </div>
      {/* Horizontal line */}
      <hr className="flex-grow" />

      <form className="flex-grow-0">
        <label htmlFor="sort" className="text-lg capitalize mr-2 font-thin">
          sort by
        </label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
          className="border-transparent text-lg capitalize py-1 px-2"
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </section>
  )
}

export default Sort
