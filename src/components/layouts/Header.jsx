import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { FaBars } from "react-icons/fa"
import Buttons from "../common/Buttons"

import { useProductsContext } from "../../context/products_context"

const Header = () => {
  const { openSidebar } = useProductsContext()
  return (
    <nav className="h-20 flex items-center justify-center">
      <div className="w-11/12 mx-auto max-w-700 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[175px] ml-[-15px]" />
          </Link>
          <button type="button" className="lg:hidden" onClick={openSidebar}>
            <FaBars className="text-primary text-2xl" />
          </button>
        </div>
        <ul className="hidden lg:flex lg:justify-center">
          <li className="mx-2">
            <Link
              to="/"
              className="text-normal text-base capitalize tracking-widest py-2 hover:border-b-2 hover:border-primary"
            >
              home
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/about"
              className="text-normal text-base capitalize tracking-widest py-2 hover:border-b-2 hover:border-primary"
            >
              about
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/products"
              className="text-normal text-base capitalize tracking-widest py-2 hover:border-b-2 hover:border-primary"
            >
              products
            </Link>
          </li>
        </ul>
        <Buttons className="hidden lg:grid" />
      </div>
    </nav>
  )
}

export default Header
